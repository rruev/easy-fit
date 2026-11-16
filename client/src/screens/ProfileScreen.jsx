import { View, StyleSheet, Alert } from 'react-native';
import { useUser } from '../hooks/useUser';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import ListRow from '../components/ListRow';
import Button from '../components/Button';
import { spacing } from '../theme';

export default function ProfileScreen() {
    const { user, logout, deleteAccount } = useUser();

    const handleLogout = async () => {
        await logout();
    };

    const handleDeleteAccount = async () => {
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: async () => await deleteAccount(user.id) }
            ]
        );
    };

    return (
        <Screen scroll>
            <View style={styles.header}>
                <Avatar name={user.email} />
                <AppText variant="heading">{user.name || user.email}</AppText>
                <AppText muted>{user.email}</AppText>
            </View>

            <Card>
                <ListRow icon="edit" label="Edit profile" />
                <ListRow icon="photo-camera" label="Change avatar" />
            </Card>

            <Button title="Log out" variant="secondary" icon="logout" onPress={handleLogout} />
            <Button title="Delete account" variant="danger" icon="delete-outline" onPress={handleDeleteAccount} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        gap: spacing.sm,
        marginVertical: spacing.lg,
    },
});
