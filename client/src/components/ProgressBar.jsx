import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

// progress is a number between 0 and 1
export default function ProgressBar({ label, valueLabel, progress, color = colors.primary }) {
    return (
        <View style={styles.wrapper}>
            {(label || valueLabel) && (
                <View style={styles.labels}>
                    <AppText variant="subheading">{label}</AppText>
                    <AppText variant="caption" muted>{valueLabel}</AppText>
                </View>
            )}
            <View style={styles.track}>
                <View style={[styles.fill, { width: `${progress * 100}%`, backgroundColor: color }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        gap: spacing.sm,
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    track: {
        height: 8,
        borderRadius: radius.pill,
        backgroundColor: colors.surfaceAlt,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        borderRadius: radius.pill,
    },
});
