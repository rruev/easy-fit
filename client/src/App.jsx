import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigators/RootNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { navigationTheme } from './theme';

export default function App() {
    const user = true;
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer theme={navigationTheme}>
                {user ? <RootNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </>
    );
}
