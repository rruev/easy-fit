import { StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { spacing } from '../theme';

export default function WorkoutExerciseFormScreen({ route }) {
    const { exercise, mode } = route.params;
    const reps = exercise.target?.match(/^\s*(\d+)\s*reps?\s*$/i)?.[1] ?? '';

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <View style={styles.heading}>
                <AppText variant="heading">{exercise.name}</AppText>
                <AppText muted>Configure this exercise for your workout.</AppText>
            </View>

            <TextField
                label="Sets"
                keyboardType="numeric"
                placeholder="e.g. 3"
                defaultValue={exercise.sets != null ? String(exercise.sets) : ''}
            />
            <TextField
                label="Reps"
                keyboardType="numeric"
                placeholder="e.g. 10"
                defaultValue={reps}
            />
            <TextField
                label="Rest (seconds)"
                keyboardType="numeric"
                placeholder="e.g. 60"
                defaultValue={exercise.rest != null ? String(exercise.rest) : ''}
            />

            <AppText variant="caption" muted>Preview only. Changes will not be saved.</AppText>
            <Button title={mode === 'edit' ? 'Save changes' : 'Add exercise'} icon="check" />
            {mode === 'edit' && (
                <Button title="Remove from workout" variant="danger" icon="delete-outline" />
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    heading: {
        gap: spacing.sm,
    },
});
