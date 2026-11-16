import { View, StyleSheet } from 'react-native';

import Card from './Card';
import AppText from './AppText';
import IconButton from './IconButton';
import { exerciseCategoryColors, spacing } from '../theme';

export default function ExerciseListItem({ exercise, onPress, onEdit, onDelete }) {
    const accent = exerciseCategoryColors[exercise.category];

    return (
        <Card onPress={onPress} style={styles.card}>
            <View style={[styles.stripe, { backgroundColor: accent }]} />
            <View style={styles.info}>
                <AppText variant="subheading">{exercise.name}</AppText>
                <AppText variant="caption" color={accent}>{exercise.category.toUpperCase()}</AppText>
                <AppText variant="caption" muted>
                    {exercise.sets} sets · {exercise.target}
                </AppText>
            </View>
            <IconButton name="edit" size={40} onPress={onEdit} />
            <IconButton name="delete-outline" size={40} onPress={onDelete} />
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingVertical: spacing.md,
    },
    stripe: {
        width: 4,
        alignSelf: 'stretch',
        borderRadius: 2,
        marginRight: spacing.xs,
    },
    info: {
        flex: 1,
        gap: 2,
    },
});
