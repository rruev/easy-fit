import { View, Pressable, StyleSheet } from 'react-native';

import { colors, radius, spacing } from '../theme';

export default function Card({ onPress, style, children }) {
    if (onPress) {
        return (
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [styles.card, style, pressed && styles.pressed]}
            >
                {children}
            </Pressable>
        );
    }

    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
        padding: spacing.lg,
    },
    pressed: {
        opacity: 0.8,
    },
});
