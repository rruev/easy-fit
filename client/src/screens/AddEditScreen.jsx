import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import SectionHeader from '../components/SectionHeader';
import ExerciseRow from '../components/ExerciseRow';
import Button from '../components/Button';

import useCategories from '../hooks/useCategories';
import useItem from '../hooks/useItem';
import { workoutCategoriesService, workoutService } from '../services';
import { colors, spacing } from '../theme';

export default function AddEditScreen({ navigation, route }) {
    const workoutId = route.params?.workoutId;
    const addMode = !workoutId;

    const { item: workout, loading, error, createItem, updateItem, deleteItem } = useItem(workoutService, workoutId, addMode);
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories(workoutCategoriesService);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [validationError, setValidationError] = useState(null);

    useEffect(() => {
        if (workout) {
            setName(workout.name);
            setDescription(workout.description ?? '');
            setSelectedCategory(workout.categoryId);
        }
    }, [workout]);

    const handleSubmit = async () => {
        if (loading || (!addMode && !workout)) return;
        
        if (!name.trim()) {
            setValidationError('Name is required');
            return;
        }
        if (!selectedCategory) {
            setValidationError('Category is required');
            return;
        }
        setValidationError(null);

        const data = { name: name.trim(), description, categoryId: selectedCategory };
        const succeeded = addMode ? await createItem(data) : await updateItem(data);
        if (succeeded) navigation.goBack();
    };

    const handleDelete = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this workout?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    if (await deleteItem(workoutId)) navigation.goBack();
                },
            },
        ]);
    };

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            {!addMode && loading && !workout && <ActivityIndicator size="small" color={colors.primary} />}
            <TextField
                label="Name"
                placeholder="e.g. Upper Body Power"
                value={name}
                onChangeText={setName}
            />

            <View style={styles.group}>
                <AppText variant="caption" muted>CATEGORY</AppText>
                <View style={styles.chips}>
                    {categoriesLoading && <ActivityIndicator size="small" color={colors.primary} />}
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            label={category.name}
                            color={category.color}
                            selected={category.id === selectedCategory}
                            onPress={() => setSelectedCategory(category.id)}
                        />
                    ))}
                </View>
                {categoriesError && <AppText variant="error">Unable to load categories.</AppText>}
                <View style={styles.categoryActions}>
                    <Chip label="+ Add category" />
                    <Chip label="Manage categories" />
                </View>
                <AppText variant="caption" muted>Category management is not available yet.</AppText>
            </View>

            <TextField
                label="Description"
                placeholder="What is this workout about?"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <View style={styles.exercises}>
                <SectionHeader
                    title="Exercises"
                    actionLabel="Add"
                    onActionPress={() => navigation.navigate('SelectWorkoutExercise')}
                />
                {(workout?.exercises ?? []).map((exercise) => (
                    <View key={exercise.exerciseId} style={styles.exerciseItem}>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={`Edit ${exercise.exercise.name}`}
                            onPress={() => navigation.navigate('WorkoutExerciseForm', {
                                exercise: {
                                    ...exercise,
                                    name: exercise.exercise.name,
                                    target: `${exercise.target} ${exercise.targetType}`,
                                    rest: exercise.restSeconds,
                                },
                                mode: 'edit',
                            })}
                            style={styles.exerciseRow}
                        >
                            <ExerciseRow exercise={exercise} />
                        </Pressable>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={`Remove ${exercise.exercise.name}`}
                            accessibilityState={{ disabled: true }}
                            disabled
                            style={styles.removeButton}
                        >
                            <Icon name="delete-outline" size={22} color={colors.danger} />
                        </Pressable>
                    </View>
                ))}
            </View>

            {validationError && <AppText variant="error">{validationError}</AppText>}
            {error && <AppText variant="error">Unable to load or save the workout. Please try again.</AppText>}
            {!addMode && !loading && !workout && !error && (
                <AppText variant="error">Workout not found.</AppText>
            )}
            <Button title={addMode ? 'Add workout' : 'Save changes'} icon="check" onPress={handleSubmit} loading={loading} />
            {!addMode && workout && (
                <Button title="Delete workout" variant="danger" icon="delete-outline" onPress={handleDelete} loading={loading} />
            )}
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
