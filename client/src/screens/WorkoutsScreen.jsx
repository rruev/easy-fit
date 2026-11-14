import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import Chip from '../components/Chip';
import WorkoutCard from '../components/WorkoutCard';
import FloatingButton from '../components/FloatingButton';
import { categories, workouts } from '../data/mockData';
import { categoryColors, spacing } from '../theme';

const selectedCategory = 'All';

export default function WorkoutsScreen({ navigation }) {
    const openDetails = () =>
        navigation.navigate('WorkoutNavigator', { screen: 'WorkoutDetails' });
    const openAddEdit = () =>
        navigation.navigate('WorkoutNavigator', { screen: 'AddEditWorkout' });

    return (
        <Screen>
            <FlatList
                data={workouts}
                keyExtractor={(workout) => workout.id}
                renderItem={({ item }) => <WorkoutCard workout={item} onPress={openDetails} />}
                ListHeaderComponent={
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filters}
                    >
                        <Chip label="All" selected={selectedCategory === 'All'} />
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                color={categoryColors[category]}
                                selected={selectedCategory === category}
                            />
                        ))}
                    </ScrollView>
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
    filters: {
        gap: spacing.sm,
        paddingBottom: spacing.lg,
    },
    separator: {
        height: spacing.md,
    },
});
