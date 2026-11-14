import { View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import AppText from './AppText';
import { colors, spacing } from '../theme';

export default function AuthHeader({ title, subtitle }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.logo}>
                <Icon name="fitness-center" size={36} color={colors.onPrimary} />
            </View>
            <AppText variant="title">{title}</AppText>
            <AppText muted style={styles.subtitle}>{subtitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        gap: spacing.sm,
        marginVertical: spacing.xl,
    },
    logo: {
        width: 72,
        height: 72,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        marginBottom: spacing.md,
    },
    subtitle: {
        textAlign: 'center',
    },
});
