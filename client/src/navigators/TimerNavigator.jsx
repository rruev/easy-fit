import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import TimerScreen from '../screens/TimerScreen';

const Stack = createNativeStackNavigator();

export default function TimerNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="WorkoutDetails" 
                component={WorkoutDetailsScreen}
                options={{ title: 'Workout Details' }}
            />
            <Stack.Screen 
                name="Timer" 
                component={TimerScreen}
                options={{ title: 'Timer' }}
            />
        </Stack.Navigator>
    );
}