import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useUser } from '../hooks/useUser';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';

import { colors, spacing } from '../theme';

export default function RegisterScreen({ navigation }) {
    const { register } = useUser();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
        setLoading(true);
        try {
            setError(null);
            await register({email, password, confirmPassword});
        } catch (err) {
            setError(err.response?.data?.errors);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Screen scroll edges={['top', 'bottom', 'left', 'right']}>
            <AuthHeader title="Create account" subtitle="Start planning and tracking your workouts" />

            <TextField
                label="Email"
                name="email"
                icon="mail-outline"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            {error?.email && <AppText color={colors.error}>{error.email}</AppText>}
            <TextField
                label="Password"
                name="password"
                icon="lock-outline"
                placeholder="Choose a password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error?.password && <AppText color={colors.error}>{error.password}</AppText>}
            <TextField
                label="Confirm password"
                name="confirmPassword"
                icon="lock-outline"
                placeholder="Repeat your password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            {error?.confirmPassword && <AppText color={colors.error}>{error.confirmPassword}</AppText>}

            <Button title="Create account" onPress={handleCreateAccount} loading={loading} />
            {error?.general && <AppText color={colors.error}>{error.general}</AppText>}

            <View style={styles.footer}>
                <AppText muted>Already have an account?</AppText>
                <AppText
                    variant="subheading"
                    color={colors.primary}
                    onPress={() => navigation.goBack()}
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
