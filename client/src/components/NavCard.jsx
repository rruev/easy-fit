import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Card from './Card';
import AppText from './AppText';
import { colors, spacing } from '../theme';

export default function NavCard({ icon, title, subtitle, onPress }) {
    return (
        <Card onPress={onPress} style={styles.card}>
            <View style={styles.iconBox}>
                <Icon name={icon} size={24} color={colors.primary} />
            </View>
            <View style={styles.info}>
                <AppText variant="subheading">{title}</AppText>
                <AppText variant="caption" muted>{subtitle}</AppText>
            </View>
            <Icon name="chevron-right" size={24} color={colors.textMuted} />
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceAlt,
    },
    info: {
        flex: 1,
        gap: 2,
    },
});
