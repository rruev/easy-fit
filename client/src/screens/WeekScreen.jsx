import Screen from '../components/Screen';
import AppText from '../components/AppText';
import DaySelector from '../components/DaySelector';
import SectionHeader from '../components/SectionHeader';
import ScheduleItem from '../components/ScheduleItem';
import Card from '../components/Card';
import { getWorkoutById, weekDays, weekSchedule } from '../data/mockData';

const selectedDay = 'sat';

export default function WeekScreen({ navigation }) {
    const openWorkout = () =>
        navigation.navigate('TimerNavigator', { screen: 'WorkoutDetails', params: { isTimerNav: true } });

    const items = weekSchedule[selectedDay];

    return (
        <Screen scroll>
            <DaySelector days={weekDays} selectedKey={selectedDay} />

            <SectionHeader title="Saturday, 14 November" />
            {items.length === 0 ? (
                <Card>
                    <AppText muted>Nothing scheduled. Enjoy your rest day!</AppText>
                </Card>
            ) : (
                items.map((item) => (
                    <ScheduleItem
                        key={item.id}
                        time={item.time}
                        workout={getWorkoutById(item.workoutId)}
                        status={item.status}
                        onPress={openWorkout}
                    />
                ))
            )}
        </Screen>
    );
}
