import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigators/RootNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { navigationTheme } from './theme';
import { UserProvider } from './contexts/UserContext';
import { useUser } from './hooks/useUser';

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <UserProvider>
                <NavigationContainer theme={navigationTheme}>
                    {useUser()?.user ? <RootNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            </UserProvider>
        </>
    );
}
