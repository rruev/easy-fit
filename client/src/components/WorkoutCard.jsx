import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import Card from './Card';
import AppText from './AppText';
import MetaItem from './MetaItem';
import { categoryColors, colors, spacing } from '../theme';

export default function WorkoutCard({ workout, onPress }) {
    const accent = categoryColors[workout.category];

    return (
        <Card onPress={onPress} style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: accent + '26' }]}>
                <Icon name="fitness-center" size={26} color={accent} />
            </View>
            <View style={styles.info}>
                <AppText variant="subheading">{workout.name}</AppText>
                <AppText variant="caption" color={accent}>{workout.category.toUpperCase()}</AppText>
                <View style={styles.meta}>
                    <MetaItem icon="schedule" label={`${workout.duration} min`} />
                    <MetaItem icon="list" label={`${workout.exercises.length} exercises`} />
                </View>
            </View>
            <Icon name="chevron-right" size={24} color={colors.textMuted} />
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg,
    },
    iconBox: {
        width: 56,
        height: 56,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        gap: spacing.xs,
    },
    meta: {
        flexDirection: 'row',
        gap: spacing.lg,
        marginTop: spacing.xs,
    },
});
