import { Pressable, View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';
import { categories, workouts } from '../data/mockData';
import { categoryColors, colors, spacing } from '../theme';

const workout = workouts[0];

export default function AddEditScreen({ navigation }) {
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
                <View style={styles.categoryActions}>
                    <Chip label="+ Add category" />
                    <Chip label="Manage categories" />
                </View>
                <AppText variant="caption" muted>Category management is not available yet.</AppText>
            </View>

            <TextField
                label="Description"
                placeholder="What is this workout about?"
                defaultValue={workout.description}
                multiline
            />

            <View style={styles.exercises}>
                <SectionHeader
                    title="Exercises"
                    actionLabel="Add"
                    onActionPress={() => navigation.navigate('SelectWorkoutExercise')}
                />
                {workout.exercises.map((exercise, index) => (
                    <View key={exercise.id} style={styles.exerciseItem}>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={`Edit ${exercise.name}`}
                            onPress={() => navigation.navigate('WorkoutExerciseForm', { exercise, mode: 'edit' })}
                            style={styles.exerciseRow}
                        >
                            <ExerciseRow index={index + 1} exercise={exercise} />
                        </Pressable>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={`Remove ${exercise.name}`}
                            accessibilityState={{ disabled: true }}
                            disabled
                            style={styles.removeButton}
                        >
                            <Icon name="delete-outline" size={22} color={colors.danger} />
                        </Pressable>
                    </View>
                ))}
            </View>

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
    categoryActions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    exercises: {
        gap: spacing.md,
    },
    exerciseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    exerciseRow: {
        flex: 1,
    },
    removeButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
