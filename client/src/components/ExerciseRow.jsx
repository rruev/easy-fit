import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

export default function ExerciseRow({ exercise, active = false }) {
    return (
        <View style={[styles.row, active && styles.active]}>
            <View style={[styles.badge, active && styles.badgeActive]}>
                <AppText variant="caption" color={active ? colors.onPrimary : colors.textMuted}>
                    {exercise.position}
                </AppText>
            </View>
            <View style={styles.info}>
                <AppText variant="subheading">{exercise.exercise.name}</AppText>
                <AppText variant="caption" muted>
                    {exercise.sets} {exercise.sets === 1 ? 'set' : 'sets'} · {exercise.target} reps
                </AppText>
            </View>
            {exercise.restSeconds > 0 && (
                <AppText variant="caption" muted>{exercise.restSeconds}s rest</AppText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        padding: spacing.md,
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    active: {
        borderColor: colors.primary,
    },
    badge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceAlt,
    },
    badgeActive: {
        backgroundColor: colors.primary,
    },
    info: {
        flex: 1,
        gap: 2,
    },
});
