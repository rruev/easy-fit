import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import AddEditScreen from '../screens/AddEditScreen';

const Stack = createNativeStackNavigator();

export default function WorkoutNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="WorkoutDetails" 
                component={WorkoutDetailsScreen}
                options={{ title: 'Workout Details' }}
            />
            <Stack.Screen 
                name="AddEditWorkout" 
                component={AddEditScreen}
                options={{ title: 'Add or Edit Workout' }}
            />
        </Stack.Navigator>
    );
}
