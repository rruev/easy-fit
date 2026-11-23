import { FlatList, ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useState } from 'react';
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

export default function ExercisesScreen({ navigation }) {
    const { items: exercises, loading: exercisesLoading, fetchItems } = useItem(exerciseService, null);
    const { categories } = useCategories(exerciseService);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const openForm = (exerciseId) => navigation.navigate('ExerciseForm', { exerciseId });

    const handleSearch = async (text) => await fetchItems({ search: text });

    return (
        <Screen edges={['left', 'right', 'bottom']}>
            <FlatList
                data={exercises}
                keyExtractor={(exercise) => exercise.id}
                renderItem={({ item }) => (
                    <ExerciseListItem
                        exercise={item}
                        onPress={() => openForm(item.id)}
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
                            <Chip label="All" selected={selectedCategory === 'All'} onPress={() => setSelectedCategory('All')} />
                            {categories.map((category) => (
                                <Chip
                                    key={category}
                                    label={category}
                                    color={category.color}
                                    selected={selectedCategory === category}
                                    onPress={() => setSelectedCategory(category)}
                                />
                            ))}
                        </ScrollView>
                        <AppText variant="caption" muted>{exercises.length} EXERCISES</AppText>
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
