import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TodayScreen from '../screens/TodayScreen';
import WeekScreen from '../screens/WeekScreen';

const Tab = createMaterialTopTabNavigator();

export default function ScheduleNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Today" 
                component={TodayScreen}
            />
            <Tab.Screen 
                name="ThisWeek" 
                component={WeekScreen}
                options={{ title: 'This Week' }}
            />
        </Tab.Navigator>
    );
}