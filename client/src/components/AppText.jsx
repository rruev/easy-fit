import { Text, StyleSheet } from 'react-native';

import { colors } from '../theme';

export default function AppText({ variant = 'body', muted = false, color, style, ...rest }) {
    return (
        <Text
            style={[styles.base, styles[variant], muted && styles.muted, color && { color }, style]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    base: {
        color: colors.text,
    },
    muted: {
        color: colors.textMuted,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
    },
    subheading: {
        fontSize: 16,
        fontWeight: '600',
    },
    body: {
        fontSize: 15,
    },
    caption: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
