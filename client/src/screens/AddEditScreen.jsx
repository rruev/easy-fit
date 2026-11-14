import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';
import { categories, workouts } from '../data/mockData';
import { categoryColors, spacing } from '../theme';

const workout = workouts[0];

export default function AddEditScreen() {
    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <TextField label="Name" placeholder="e.g. Upper Body Power" defaultValue={workout.name} />

            <View style={styles.group}>
                <AppText variant="caption" muted>CATEGORY</AppText>
                <View style={styles.chips}>
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            color={categoryColors[category]}
                            selected={category === workout.category}
                        />
                    ))}
                </View>
            </View>

            <TextField
                label="Duration (minutes)"
                icon="schedule"
                keyboardType="numeric"
                defaultValue={String(workout.duration)}
            />
            <TextField
                label="Description"
                placeholder="What is this workout about?"
                defaultValue={workout.description}
                multiline
            />

            <SectionHeader title="Exercises" actionLabel="Add" />
            {workout.exercises.map((exercise, index) => (
                <ExerciseRow key={exercise.id} index={index + 1} exercise={exercise} />
            ))}

            <Button title="Save workout" icon="check" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    group: {
        gap: spacing.sm,
    },
    chips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
});
