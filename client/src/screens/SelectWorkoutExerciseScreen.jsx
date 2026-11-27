import { StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import { exercises } from '../data/mockData';
import { exerciseCategoryColors, spacing } from '../theme';

export default function SelectWorkoutExerciseScreen({ navigation }) {
    return (
        <Screen scroll edges={['left', 'right', 'bottom']}>
            <AppText muted>Select an exercise to configure it for this workout.</AppText>
            <View style={styles.list}>
                {exercises.map((exercise) => (
                    <Card
                        key={exercise.id}
                        onPress={() => navigation.navigate('WorkoutExerciseForm', { exercise, mode: 'add' })}
                        style={styles.item}
                    >
                        <AppText variant="subheading">{exercise.name}</AppText>
                        <AppText variant="caption" color={exerciseCategoryColors[exercise.category]}>
                            {exercise.category.toUpperCase()}
                        </AppText>
                    </Card>
                ))}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    list: {
        gap: spacing.md,
    },
    item: {
        gap: spacing.xs,
    },
});
