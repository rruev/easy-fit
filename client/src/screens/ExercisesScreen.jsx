import { FlatList, ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { exerciseCategoryColors, spacing } from '../theme';

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
    const { items, loading: exercisesLoading, fetchItems } = useItem(exerciseService, null);
    const { categories, loading: categoriesLoading } = useCategories(exerciseCategoriesService);
    const [selectedCategory, setSelectedCategory] = useState('');

    const openForm = (exerciseId) => navigation.navigate('ExerciseForm', { exerciseId });

    const handleSearch = async (text) => await fetchItems({ search: text });

    return (
        <Screen edges={['left', 'right', 'bottom']}>
            <FlatList
                data={items.exercises}
                keyExtractor={(exercise) => exercise.id}
                renderItem={({ item }) => (
                    <ExerciseListItem
                        exercise={item}
                        onEdit={() => openForm(item.id)}
                    />
                )}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <TextField icon="search" placeholder="Search exercises" onChangeText={handleSearch} />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filters}
                        >
                            {categoriesLoading ? (
                                <ActivityIndicator size="small" color="primary" />
                            ) : (
                                <>
                                    <Chip label="All" selected={selectedCategory === ''} onPress={() => setSelectedCategory('')} />
                                    {categories.map((category) => (
                                        <Chip
                                            key={category.id}
                                            label={category.name}
                                            color={category.color}
                                            selected={selectedCategory === category.id}
                                            onPress={() => setSelectedCategory(category.id)}
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
