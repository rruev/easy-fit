import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import AddEditScreen from '../screens/AddEditScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExerciseFormScreen from '../screens/ExerciseFormScreen';
import SelectWorkoutExerciseScreen from '../screens/SelectWorkoutExerciseScreen';
import WorkoutExerciseFormScreen from '../screens/WorkoutExerciseFormScreen';

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
            <Stack.Screen
                name="SelectWorkoutExercise"
                component={SelectWorkoutExerciseScreen}
                options={{ title: 'Select Exercise' }}
            />
            <Stack.Screen
                name="WorkoutExerciseForm"
                component={WorkoutExerciseFormScreen}
                options={({ route }) => ({
                    title: route.params?.mode === 'edit' ? 'Edit Workout Exercise' : 'Add Workout Exercise'
                })}
            />
            <Stack.Screen 
                name="Exercises" 
                component={ExercisesScreen}
                options={{ title: 'Exercises' }}
            />
            <Stack.Screen 
                name="ExerciseForm" 
                component={ExerciseFormScreen}
                options={({ route }) => ({
                    title: route.params?.exerciseId ? 'Edit Exercise' : 'New Exercise'
                })}
            />
        </Stack.Navigator>
    );
}
