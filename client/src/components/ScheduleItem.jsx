import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Card from './Card';
import AppText from './AppText';
import { categoryColors, colors, spacing } from '../theme';

const statusIcons = {
    done: { name: 'check-circle', color: colors.success },
    next: { name: 'play-circle-filled', color: colors.primary },
    upcoming: { name: 'radio-button-unchecked', color: colors.textMuted },
};

export default function ScheduleItem({ time, workout, status = 'upcoming', onPress }) {
    const statusIcon = statusIcons[status];

    return (
        <View style={styles.row}>
            <AppText variant="subheading" muted style={styles.time}>{time}</AppText>
            <Card
                onPress={onPress}
                style={[styles.card, status === 'next' && styles.cardNext]}
            >
                <View style={[styles.stripe, { backgroundColor: categoryColors[workout.category] }]} />
                <View style={styles.info}>
                    <AppText variant="subheading">{workout.name}</AppText>
                    <AppText variant="caption" muted>
                        {workout.category} · {workout.duration} min
                    </AppText>
                </View>
                <Icon name={statusIcon.name} size={26} color={statusIcon.color} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    time: {
        width: 52,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        paddingVertical: spacing.md,
    },
    cardNext: {
        borderColor: colors.primary,
    },
    stripe: {
        width: 4,
        alignSelf: 'stretch',
        borderRadius: 2,
    },
    info: {
        flex: 1,
        gap: 2,
    },
});
