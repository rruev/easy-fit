import { Pressable, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

const variants = {
    primary: { backgroundColor: colors.primary, borderColor: colors.primary, textColor: colors.onPrimary },
    secondary: { backgroundColor: colors.surfaceAlt, borderColor: colors.border, textColor: colors.text },
    danger: { backgroundColor: 'transparent', borderColor: colors.danger, textColor: colors.danger },
};

export default function Button({ title, icon, variant = 'primary', onPress, style }) {
    const { backgroundColor, borderColor, textColor } = variants[variant];

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor, borderColor },
                style,
                pressed && styles.pressed,
            ]}
        >
            {icon && <Icon name={icon} size={20} color={textColor} />}
            <AppText variant="subheading" color={textColor}>{title}</AppText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        paddingVertical: 14,
        paddingHorizontal: spacing.xl,
        borderRadius: radius.md,
        borderWidth: 1,
    },
    pressed: {
        opacity: 0.8,
    },
});
