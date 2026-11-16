import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';

import { colors, spacing } from '../theme';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = () => {
      console.log('Create account clicked');  
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
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
            <TextField
                label="Password"
                name="password"
                icon="lock-outline"
                placeholder="Choose a password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextField
                label="Confirm password"
                name="confirmPassword"
                icon="lock-outline"
                placeholder="Repeat your password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Button title="Create account" onPress={handleCreateAccount} />

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
