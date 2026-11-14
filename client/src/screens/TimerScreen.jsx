import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TimerDisplay from '../components/TimerDisplay';
import IconButton from '../components/IconButton';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';
import { workouts } from '../data/mockData';
import { spacing } from '../theme';

const workout = workouts[0];
const [current, ...upNext] = workout.exercises;

export default function TimerScreen() {
    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <View style={styles.header}>
                <AppText variant="caption" muted>{workout.name.toUpperCase()}</AppText>
                <AppText variant="title">{current.name}</AppText>
                <AppText muted>Set 2 of {current.sets} · {current.target}</AppText>
            </View>

            <TimerDisplay time="01:30" label="Rest" />

            <View style={styles.controls}>
                <IconButton name="skip-previous" />
                <IconButton name="pause" size={80} variant="primary" />
                <IconButton name="skip-next" />
            </View>

            <SectionHeader title="Up next" />
            {upNext.slice(0, 3).map((exercise, index) => (
                <ExerciseRow key={exercise.id} index={index + 2} exercise={exercise} />
            ))}

            <Button title="Finish workout" variant="danger" icon="stop" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        gap: spacing.xs,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.xl,
    },
});
