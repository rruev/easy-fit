import { Pressable, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { colors } from '../theme';

export default function FloatingButton({ icon = 'add', onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
            <Icon name={icon} size={28} color={colors.onPrimary} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    pressed: {
        opacity: 0.85,
    },
});
