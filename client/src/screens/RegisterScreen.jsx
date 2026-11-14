import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { colors, spacing } from '../theme';

export default function RegisterScreen({ navigation }) {
    return (
        <Screen scroll edges={['top', 'bottom', 'left', 'right']}>
            <AuthHeader title="Create account" subtitle="Start planning and tracking your workouts" />

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
                placeholder="Choose a password"
                secureTextEntry
            />
            <TextField
                label="Confirm password"
                icon="lock-outline"
                placeholder="Repeat your password"
                secureTextEntry
            />

            <Button title="Create account" />

            <View style={styles.footer}>
                <AppText muted>Already have an account?</AppText>
                <AppText
                    variant="subheading"
                    color={colors.primary}
                    onPress={() => navigation.navigate('Login')}
                >
                    Log in
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
