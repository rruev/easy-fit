import { View, StyleSheet } from 'react-native';
import { useUser } from '../hooks/useUser';
import { useState } from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { colors, spacing } from '../theme';

export default function LoginScreen({ navigation }) {
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            setError(null);
            await login({ email, password });
        } catch (err) {
            setError(err.response?.data?.errors);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Screen scroll edges={['top', 'bottom', 'left', 'right']}>
            <AuthHeader title="Welcome back" subtitle="Log in to keep track of your training" />

            <TextField
                label="Email"
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
                icon="lock-outline"
                placeholder="Your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error?.password && <AppText color={colors.error}>{error.password}</AppText>}

            <Button title="Log in" onPress={handleLogin} loading={loading} />

            {error?.general && <AppText color={colors.error}>{error.general}</AppText>}
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
