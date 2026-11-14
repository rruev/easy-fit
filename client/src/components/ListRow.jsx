import { View, Pressable, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import AppText from './AppText';
import { colors, spacing } from '../theme';

export default function ListRow({ icon, label, value, onPress, showChevron = true }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}
        >
            <View style={styles.iconBox}>
                <Icon name={icon} size={20} color={colors.primary} />
            </View>
            <AppText variant="subheading" style={styles.label}>{label}</AppText>
            {value && <AppText variant="body" muted>{value}</AppText>}
            {showChevron && <Icon name="chevron-right" size={22} color={colors.textMuted} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        paddingVertical: spacing.md,
    },
    pressed: {
        opacity: 0.6,
    },
    iconBox: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceAlt,
    },
    label: {
        flex: 1,
    },
});
