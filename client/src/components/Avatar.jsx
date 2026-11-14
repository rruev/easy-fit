import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors } from '../theme';

export default function Avatar({ name, size = 80 }) {
    const initials = name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <View
            style={[
                styles.avatar,
                { width: size, height: size, borderRadius: size / 2 },
            ]}
        >
            <AppText style={{ fontSize: size * 0.36, fontWeight: '800' }} color={colors.onPrimary}>
                {initials}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
});
