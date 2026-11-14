import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors, radius, spacing } from '../theme';

const CHART_HEIGHT = 120;

export default function ActivityBars({ data }) {
    const max = Math.max(...data.map((item) => item.minutes), 1);

    return (
        <View style={styles.row}>
            {data.map((item) => (
                <View key={item.id} style={styles.column}>
                    <View style={styles.track}>
                        <View
                            style={[
                                styles.bar,
                                { height: (item.minutes / max) * CHART_HEIGHT },
                                item.minutes === 0 && styles.empty,
                            ]}
                        />
                    </View>
                    <AppText variant="caption" muted>{item.label}</AppText>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        alignItems: 'center',
        gap: spacing.sm,
        flex: 1,
    },
    track: {
        height: CHART_HEIGHT,
        justifyContent: 'flex-end',
    },
    bar: {
        width: 18,
        borderRadius: radius.sm,
        backgroundColor: colors.primary,
    },
    empty: {
        height: 4,
        backgroundColor: colors.surfaceAlt,
    },
});
