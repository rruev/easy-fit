import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';

import ScheduleNavigator from './ScheduleNavigator';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Schedule" 
                component={ScheduleNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="schedule" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Workouts" 
                component={WorkoutsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="fitness-center" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="dashboard" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}