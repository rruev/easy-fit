import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { navigationTheme } from './theme';
import { UserProvider } from './contexts/UserContext';
import { useUser } from './hooks/useUser';

import RootNavigator from './navigators/RootNavigator';
import AuthNavigator from './navigators/AuthNavigator';

function Navigation() {
    const { user } = useUser();
    return (
        <NavigationContainer theme={navigationTheme}>
            {user ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <UserProvider>
                <Navigation />
            </UserProvider>
        </>
    );
}
