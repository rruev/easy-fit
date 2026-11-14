import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Card from './Card';
import AppText from './AppText';
import { spacing } from '../theme';

export default function StatCard({ icon, value, label, color }) {
    return (
        <Card style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: color + '26' }]}>
                <Icon name={icon} size={22} color={color} />
            </View>
            <AppText variant="title">{value}</AppText>
            <AppText variant="caption" muted>{label.toUpperCase()}</AppText>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        gap: spacing.xs,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
    },
});
