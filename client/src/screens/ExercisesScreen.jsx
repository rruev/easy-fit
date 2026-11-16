import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import TextField from '../components/TextField';
import Chip from '../components/Chip';
import ExerciseListItem from '../components/ExerciseListItem';
import FloatingButton from '../components/FloatingButton';
import { exerciseCategories, exercises } from '../data/mockData';
import { exerciseCategoryColors, spacing } from '../theme';

const selectedCategory = 'All';

export default function ExercisesScreen({ navigation }) {
    const openForm = (exerciseId) => navigation.navigate('ExerciseForm', { exerciseId });

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
                        <TextField icon="search" placeholder="Search exercises" />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filters}
                        >
                            <Chip label="All" selected={selectedCategory === 'All'} />
                            {exerciseCategories.map((category) => (
                                <Chip
                                    key={category}
                                    label={category}
                                    color={exerciseCategoryColors[category]}
                                    selected={selectedCategory === category}
                                />
                            ))}
                        </ScrollView>
                        <AppText variant="caption" muted>{exercises.length} EXERCISES</AppText>
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
