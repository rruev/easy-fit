import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors } from '../theme';

const SIZE = 240;

export default function TimerDisplay({ time, label }) {
    return (
        <View style={styles.ring}>
            <AppText variant="caption" muted>{label.toUpperCase()}</AppText>
            <AppText style={styles.time}>{time}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    ring: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        borderWidth: 10,
        borderColor: colors.primary,
        backgroundColor: colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    time: {
        fontSize: 56,
        fontWeight: '800',
        fontVariant: ['tabular-nums'],
    },
});
