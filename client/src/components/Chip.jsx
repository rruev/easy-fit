import { Pressable, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

export default function Chip({ label, selected = false, color = colors.primary, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.chip,
                selected && { backgroundColor: color, borderColor: color },
            ]}
        >
            <AppText
                variant="caption"
                color={selected ? colors.onPrimary : colors.textMuted}
            >
                {label}
            </AppText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    chip: {
        paddingVertical: 8,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.pill,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
    },
});
