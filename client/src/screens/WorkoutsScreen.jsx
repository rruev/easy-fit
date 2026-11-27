import { FlatList, ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';

import Screen from '../components/Screen';
import Chip from '../components/Chip';
import WorkoutCard from '../components/WorkoutCard';
import FloatingButton from '../components/FloatingButton';
import NavCard from '../components/NavCard';

import { workoutCategoriesService, workoutService } from '../services';
import useCategories from '../hooks/useCategories';
import useItem from '../hooks/useItem';

import { exercises } from '../data/mockData';
import { spacing } from '../theme';

const selectedCategory = 'All';

export default function WorkoutsScreen({ navigation }) {
    const { items: workouts, loading: workoutsLoading } = useItem(workoutService);
    const { categories, loading: categoriesLoading } = useCategories(workoutCategoriesService);

    const openDetails = () =>
        navigation.navigate('WorkoutNavigator', { screen: 'WorkoutDetails' });

    const openExercises = () =>
        navigation.navigate('WorkoutNavigator', { screen: 'Exercises' });
    
    const openAddEdit = () =>
        navigation.navigate('WorkoutNavigator', { screen: 'AddEditWorkout' });

    return (
        <Screen>
            <FlatList
                data={workouts}
                refreshing={workoutsLoading}
                keyExtractor={(workout) => workout.id}
                renderItem={({ item }) => <WorkoutCard workout={item} onPress={openDetails} />}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <NavCard
                            icon="list-alt"
                            title="Exercise library"
                            subtitle={`${exercises.length} exercises · add, edit and remove`}
                            onPress={openExercises}
                        />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filters}
                        >
                            {categoriesLoading ? <ActivityIndicator size="small" color="primary" /> : (
                                <>
                                    <Chip label="All" selected={selectedCategory === 'All'} />
                                    {categories.map((category) => (
                                        <Chip
                                            key={category.id}
                                            label={category.name}
                                            color={category.color}
                                            selected={selectedCategory === category.name}
                                        />
                                    ))}
                                </>
                            )}
                        </ScrollView>
                    </View>
                }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
            />
            <FloatingButton onPress={openAddEdit} />
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
        paddingBottom: spacing.lg,
    },
    filters: {
        gap: spacing.sm,
    },
    separator: {
        height: spacing.md,
    },
});
