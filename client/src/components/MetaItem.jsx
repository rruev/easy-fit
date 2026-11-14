import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import AppText from './AppText';
import { colors, spacing } from '../theme';

export default function MetaItem({ icon, label }) {
    return (
        <View style={styles.row}>
            <Icon name={icon} size={16} color={colors.textMuted} />
            <AppText variant="caption" muted>{label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
    },
});
