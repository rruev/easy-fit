import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigator from './HomeNavigator';
import WorkoutNavigator from './WorkoutNavigator';
import TimerNavigator from './TimerNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WorkoutNavigator"
                component={WorkoutNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TimerNavigator"
                component={TimerNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
