import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Chip from '../components/Chip';
import MetaItem from '../components/MetaItem';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';

import { workoutService } from '../services';
import useItem from '../hooks/useItem';

import { categoryColors, spacing } from '../theme';

export default function WorkoutDetailsScreen({ route, navigation }) {
    const isTimerNav = route?.params?.isTimerNav;
    const workoutId = route?.params?.workoutId;

    const { item: workout, loading: workoutLoading } = useItem(workoutService, workoutId);

    const accent = workout?.category?.color;

    if (workoutLoading) {
        return (
            <Screen>
                <ActivityIndicator size="large" color="primary" style={styles.loader} />
            </Screen>
        );
    }

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <Card style={styles.hero}>
                <View style={[styles.iconBox, { backgroundColor: accent + '26' }]}>
                    <Icon name="fitness-center" size={32} color={accent} />
                </View>
                <Chip label={workout?.category.name} color={accent} selected />
                <AppText variant="title">{workout?.name}</AppText>
                <AppText muted>{workout?.description}</AppText>
                <View style={styles.meta}>
                    <MetaItem icon="schedule" label={`${workout?.duration} min`} />
                    <MetaItem icon="list" label={`${workout?.exercises.length} exercises`} />
                    {/* <MetaItem icon="bolt" label={workout.level} /> */}
                </View>
            </Card>

            <SectionHeader title="Exercises" />
            {workout?.exercises.map((exercise) => (
                <ExerciseRow key={exercise.exerciseId} exercise={exercise} />
            ))}

            {isTimerNav ? (
                <Button
                    title="Start workout"
                    icon="play-arrow"
                    onPress={() => navigation.navigate('Timer')}
                />
            ) : (
                <Button
                    title="Edit workout"
                    icon="edit"
                    onPress={() => navigation.navigate('AddEditWorkout', { workoutId })}
                />
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    hero: {
        alignItems: 'flex-start',
        gap: spacing.md,
    },
    iconBox: {
        width: 64,
        height: 64,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    meta: {
        flexDirection: 'row',
        gap: spacing.lg,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
