import { Pressable, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { colors } from '../theme';

export default function IconButton({ name, size = 56, variant = 'secondary', onPress }) {
    const isPrimary = variant === 'primary';

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: isPrimary ? colors.primary : colors.surfaceAlt,
                },
                pressed && styles.pressed,
            ]}
        >
            <Icon
                name={name}
                size={size * 0.5}
                color={isPrimary ? colors.onPrimary : colors.text}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.8,
    },
});
