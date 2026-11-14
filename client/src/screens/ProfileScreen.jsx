import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import ListRow from '../components/ListRow';
import Button from '../components/Button';
import { user } from '../data/mockData';
import { spacing } from '../theme';

export default function ProfileScreen() {
    return (
        <Screen scroll>
            <View style={styles.header}>
                <Avatar name={user.name} />
                <AppText variant="heading">{user.name}</AppText>
                <AppText muted>{user.email}</AppText>
            </View>

            <Card>
                <ListRow icon="edit" label="Edit profile" />
                <ListRow icon="photo-camera" label="Change avatar" />
                <ListRow icon="calendar-today" label="Member since" value={user.memberSince} showChevron={false} />
            </Card>

            <Button title="Log out" variant="secondary" icon="logout" />
            <Button title="Delete account" variant="danger" icon="delete-outline" />
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
