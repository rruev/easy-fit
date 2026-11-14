import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Chip from '../components/Chip';
import MetaItem from '../components/MetaItem';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';
import { workouts } from '../data/mockData';
import { categoryColors, spacing } from '../theme';

const workout = workouts[0];

export default function WorkoutDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const isTimerNav = route?.params?.isTimerNav;
    const accent = categoryColors[workout.category];

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <Card style={styles.hero}>
                <View style={[styles.iconBox, { backgroundColor: accent + '26' }]}>
                    <Icon name="fitness-center" size={32} color={accent} />
                </View>
                <Chip label={workout.category} color={accent} selected />
                <AppText variant="title">{workout.name}</AppText>
                <AppText muted>{workout.description}</AppText>
                <View style={styles.meta}>
                    <MetaItem icon="schedule" label={`${workout.duration} min`} />
                    <MetaItem icon="list" label={`${workout.exercises.length} exercises`} />
                    <MetaItem icon="bolt" label={workout.level} />
                </View>
            </Card>

            <SectionHeader title="Exercises" />
            {workout.exercises.map((exercise, index) => (
                <ExerciseRow key={exercise.id} index={index + 1} exercise={exercise} />
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
                    onPress={() => navigation.navigate('AddEditWorkout')}
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
});
