import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import Button from '../components/Button';
import { exerciseCategories, getExerciseById } from '../data/mockData';
import { exerciseCategoryColors, spacing } from '../theme';

export default function ExerciseFormScreen({ route }) {
    // No exerciseId means we are adding a new exercise
    const exerciseId = route.params?.exerciseId;
    const exercise = exerciseId ? getExerciseById(exerciseId) : null;

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <TextField
                label="Name"
                placeholder="e.g. Bench Press"
                defaultValue={exercise?.name}
            />

            <View style={styles.group}>
                <AppText variant="caption" muted>CATEGORY</AppText>
                <View style={styles.chips}>
                    {exerciseCategories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            color={exerciseCategoryColors[category]}
                            selected={category === exercise?.category}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.half}>
                    <TextField
                        label="Sets"
                        keyboardType="numeric"
                        defaultValue={exercise ? String(exercise.sets) : undefined}
                    />
                </View>
                <View style={styles.half}>
                    <TextField
                        label="Target"
                        placeholder="e.g. 8 reps"
                        defaultValue={exercise?.target}
                    />
                </View>
            </View>

            <Button title={exercise ? 'Save changes' : 'Add exercise'} icon="check" />
            {exercise && <Button title="Delete exercise" variant="danger" icon="delete-outline" />}
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
    row: {
        flexDirection: 'row',
        gap: spacing.lg,
    },
    half: {
        flex: 1,
    },
});
