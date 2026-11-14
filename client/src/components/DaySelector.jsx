import { View, Pressable, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

export default function DaySelector({ days, selectedKey, onSelect }) {
    return (
        <View style={styles.row}>
            {days.map((day) => {
                const selected = day.key === selectedKey;

                return (
                    <Pressable
                        key={day.key}
                        onPress={() => onSelect?.(day.key)}
                        style={[styles.day, selected && styles.daySelected]}
                    >
                        <AppText
                            variant="caption"
                            color={selected ? colors.onPrimary : colors.textMuted}
                        >
                            {day.label.toUpperCase()}
                        </AppText>
                        <AppText
                            variant="subheading"
                            color={selected ? colors.onPrimary : colors.text}
                        >
                            {day.date}
                        </AppText>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: spacing.sm,
    },
    day: {
        flex: 1,
        alignItems: 'center',
        gap: spacing.xs,
        paddingVertical: spacing.md,
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
    },
    daySelected: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
});
