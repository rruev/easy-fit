import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import { colors } from '../theme';

export default function SectionHeader({ title, actionLabel, onActionPress }) {
    return (
        <View style={styles.row}>
            <AppText variant="heading">{title}</AppText>
            {actionLabel && (
                <AppText variant="subheading" color={colors.primary} onPress={onActionPress}>
                    {actionLabel}
                </AppText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
