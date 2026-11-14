import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

// Any extra prop (secureTextEntry, keyboardType, defaultValue...) is passed straight to TextInput
export default function TextField({ label, icon, multiline = false, style, ...rest }) {
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.wrapper}>
            {label && <AppText variant="caption" muted>{label.toUpperCase()}</AppText>}
            <View style={[styles.field, focused && styles.focused, multiline && styles.multiline]}>
                {icon && <Icon name={icon} size={20} color={colors.textMuted} />}
                <TextInput
                    style={[styles.input, multiline && styles.inputMultiline, style]}
                    placeholderTextColor={colors.textMuted}
                    selectionColor={colors.primary}
                    multiline={multiline}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...rest}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        gap: spacing.sm,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        paddingHorizontal: spacing.lg,
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    focused: {
        borderColor: colors.primary,
    },
    multiline: {
        alignItems: 'flex-start',
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        color: colors.text,
        fontSize: 15,
    },
    inputMultiline: {
        minHeight: 96,
        textAlignVertical: 'top',
    },
});
