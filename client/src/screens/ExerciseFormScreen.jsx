import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import Button from '../components/Button';
import Card from '../components/Card';
import CategoryForm from '../components/CategoryForm';

import { useEffect, useState } from 'react';
import useCategories from '../hooks/useCategories';
import useItem from '../hooks/useItem';
import { exerciseCategoriesService } from '../services';
import { exerciseService } from '../services';
import { spacing } from '../theme';


export default function ExerciseFormScreen({ navigation, route }) {
    // No exerciseId means we are adding a new exercise
    const exerciseId = route.params?.exerciseId;
    const addMode = exerciseId ? false : true;
    const { item: exercise, loading: exerciseLoading, createItem, updateItem, deleteItem } = useItem(exerciseService, exerciseId, addMode);
    const { categories, loading: categoriesLoading, addCategory, error: categoriesError, updateCategory, deleteCategory } = useCategories(exerciseCategoriesService);

    const [name, setName] = useState(exercise?.name || '');
    const [selectedCategory, setSelectedCategory] = useState(exercise?.category || '');

    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [managingCategories, setManagingCategories] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [validationError, setValidationError] = useState(null);

    useEffect(() => {
        setName(exercise?.name || '');
        setSelectedCategory(exercise?.category?.id || '');
    }, [exercise]);

    const closeCategoryForm = () => {
        setShowCategoryForm(false);
        setEditingCategory(null);
    };

    const toggleCategoryForm = () => {
        if (showCategoryForm && !editingCategory) {
            closeCategoryForm();
        } else {
            setEditingCategory(null);
            setShowCategoryForm(true);
        }
    };

    const handleChangeName = (text) => {
        setValidationError(null);
        setName(text);
    };

    const handleSelectCategory = (categoryId) => {
        setValidationError(null);
        setSelectedCategory(categoryId);
    };

    const handleSubmit = async () => {
        if (!name) {
            setValidationError({ name: 'Name is required' });
            return;
        }
        if (!selectedCategory) {
            setValidationError({ category: 'Category is required' });
            return;
        }
        setValidationError(null);

        if (exerciseId) {
            await updateItem({ name, categoryId: selectedCategory });
        } else {
            await createItem({ name, categoryId: selectedCategory });
        }
        navigation.goBack();
    };

    const onExerciseDelete = async () => {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete this exercise?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete', style: 'destructive', onPress: async () => {
                        await deleteItem(exerciseId);
                        navigation.goBack();
                    }
                }
            ]
        );
    };

    const onCategoryDelete = async (categoryId) => {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete this category?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete', style: 'destructive', onPress: async () => {
                        await deleteCategory(categoryId);
                    }
                }
            ]
        );
    };

    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <TextField
                label="Name"
                placeholder="e.g. Bench Press"
                value={name}
                onChangeText={handleChangeName}
                loading={exerciseLoading}
            />
            {validationError?.name && <AppText variant="error">{validationError.name}</AppText>}

            <View style={styles.group}>
                <AppText variant="caption" muted>CATEGORY</AppText>
                <View style={styles.chips}>
                    {categoriesLoading && <ActivityIndicator size="small" color="primary" />}
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            label={category.name}
                            color={category.color}
                            selected={category.id === selectedCategory}
                            onPress={() => handleSelectCategory(category.id)}
                        />
                    ))}
                </View>
                {validationError?.category && <AppText variant="error">{validationError.category}</AppText>}
                <View style={styles.categoryActions}>
                    <Chip label="+ Add category" onPress={toggleCategoryForm} />
                    <Chip
                        label={managingCategories ? 'Done managing' : 'Manage categories'}
                        onPress={() => {
                            setManagingCategories(!managingCategories);
                            if (editingCategory) closeCategoryForm();
                        }}
                    />
                </View>
            </View>

            {managingCategories && (
                <Card style={styles.group}>
                    <AppText variant="subheading">Manage categories</AppText>
                    {categories.map((category) => (
                        <View key={category.id} style={styles.categoryRow}>
                            <View style={styles.categoryName}>
                                <AppText>{category.name}</AppText>
                            </View>
                            <Chip label="Edit" onPress={() => {
                                setEditingCategory(category);
                                setShowCategoryForm(true);
                            }} />
                            <Chip label="Delete" onPress={() => {
                                closeCategoryForm();
                                onCategoryDelete(category.id);
                            }} />
                        </View>
                    ))}
                </Card>
            )}

            {showCategoryForm &&
                <View style={styles.group}>
                    {editingCategory && <AppText variant="caption" muted>Editing is not available yet.</AppText>}
                    <CategoryForm
                        key={editingCategory?.id ?? 'new'}
                        category={editingCategory}
                        onCancel={closeCategoryForm}
                        onAction={editingCategory ? updateCategory : addCategory}
                        loading={categoriesLoading}
                        error={editingCategory ? null : categoriesError}
                    />
                </View>
            }
            <Button
                title={exercise ? 'Save changes' : 'Add exercise'}
                icon="check"
                onPress={handleSubmit}
                loading={exerciseLoading}
                disabled={exerciseLoading || validationError}
            />
            {exercise && <Button title="Delete exercise" variant="danger" icon="delete-outline" onPress={onExerciseDelete} />}
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
        gap: spacing.sm,
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    categoryName: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        gap: spacing.lg,
    },
    half: {
        flex: 1,
    },
});
