import { FlatList, ScrollView, StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { spacing } from '../theme';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import ExerciseListItem from '../components/ExerciseListItem';
import FloatingButton from '../components/FloatingButton';

import useItem from '../hooks/useItem';
import useCategories from '../hooks/useCategories';
import { exerciseService } from '../services';
import { exerciseCategoriesService } from '../services';

export default function ExercisesScreen({ navigation }) {
    const { items, loading: exercisesLoading, fetchItems, deleteItem } = useItem(exerciseService, null);
    const { categories, loading: categoriesLoading } = useCategories(exerciseCategoriesService);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                await fetchItems({ search: search, category: selectedCategory });
            };
            fetchData();
        }, [search, selectedCategory])
    );

    const openForm = (exerciseId) => navigation.navigate('ExerciseForm', { exerciseId });

    const handleSearch = async (text) => {
        setSearch(text);
        await fetchItems({ search: text, category: selectedCategory });
    };

    const handleSelectedCategory = async (categoryId) => {
        setSelectedCategory(categoryId);
        await fetchItems({ search: search, category: categoryId });
    };

    const onDelete = async (exerciseId) => {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete this exercise?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete', style: 'destructive', onPress: async () => {
                        await deleteItem(exerciseId);
                    }
                }
            ]
        );
    };

    return (
        <Screen edges={['left', 'right', 'bottom']}>
            <FlatList
                data={items.exercises}
                keyExtractor={(exercise) => exercise.id}
                renderItem={({ item }) => (
                    <ExerciseListItem
                        exercise={item}
                        onEdit={() => openForm(item.id)}
                        onDelete={() => onDelete(item.id)}
                    />
                )}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <TextField
                            icon="search"
                            placeholder="Search exercises"
                            value={search}
                            onChangeText={handleSearch}
                        />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filters}
                        >
                            {categoriesLoading ? (
                                <ActivityIndicator size="small" color="primary" />
                            ) : (
                                <>
                                    <Chip label="All" selected={selectedCategory === ''} onPress={() => handleSelectedCategory('')} />
                                    {categories.map((category) => (
                                        <Chip
                                            key={category.id}
                                            label={category.name}
                                            color={category.color}
                                            selected={selectedCategory === category.id}
                                            onPress={() => handleSelectedCategory(category.id)}
                                        />
                                    ))}
                                </>
                            )}
                        </ScrollView>
                        <AppText variant="caption" muted>{items.count} EXERCISES</AppText>
                        {exercisesLoading && <ActivityIndicator size="small" color="primary" />}
                    </View>
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
                onEndReached={() => fetchItems({ search: search, category: selectedCategory, skip: items.length })}
            />
            <FloatingButton onPress={() => openForm()} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: spacing.lg,
        paddingBottom: 100,
    },
    header: {
        gap: spacing.lg,
        marginBottom: spacing.lg,
    },
    filters: {
        gap: spacing.sm,
    },
    separator: {
        height: spacing.md,
    },
});
