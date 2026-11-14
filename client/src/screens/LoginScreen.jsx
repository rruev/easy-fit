import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { colors, spacing } from '../theme';

export default function LoginScreen({ navigation }) {
    return (
        <Screen scroll edges={['top', 'bottom', 'left', 'right']}>
            <AuthHeader title="Welcome back" subtitle="Log in to keep track of your training" />

            <TextField
                label="Email"
                icon="mail-outline"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextField
                label="Password"
                icon="lock-outline"
                placeholder="Your password"
                secureTextEntry
            />

            <Button title="Log in" />

            <View style={styles.footer}>
                <AppText muted>Don't have an account?</AppText>
                <AppText
                    variant="subheading"
                    color={colors.primary}
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </AppText>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: spacing.sm,
    },
});
