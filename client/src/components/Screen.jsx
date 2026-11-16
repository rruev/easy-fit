import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '../theme';

// scroll=true wraps children in a ScrollView; otherwise children fill the screen
// (use that when the child is a FlatList, which scrolls by itself)
export default function Screen({ scroll = false, edges = ['left', 'right'], contentStyle, children, refreshing = false, onRefresh = () => {} }) {
    return (
        <SafeAreaView style={styles.container} edges={edges}>
            {scroll ? (
                <ScrollView
                    contentContainerStyle={[styles.content, contentStyle]}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>}
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={styles.flex}>{children}</View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flex: {
        flex: 1,
    },
    content: {
        padding: spacing.lg,
        gap: spacing.lg,
    },
});
