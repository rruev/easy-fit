import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import SectionHeader from '../components/SectionHeader';
import ScheduleItem from '../components/ScheduleItem';
import { getWorkoutById, today } from '../data/mockData';
import { spacing } from '../theme';

export default function TodayScreen({ navigation }) {
    const openWorkout = () =>
        navigation.navigate('TimerNavigator', { screen: 'WorkoutDetails', params: { isTimerNav: true } });

    return (
        <Screen scroll>
            <View style={styles.header}>
                <AppText variant="caption" muted>{today.label.toUpperCase()}</AppText>
                <AppText variant="title">Welcome to Easy Fit!</AppText>
            </View>

            <Card style={styles.goal}>
                <ProgressBar
                    label="Daily goal"
                    valueLabel={`${today.completed} of ${today.total} workouts`}
                    progress={today.completed / today.total}
                />
            </Card>

            <SectionHeader title="Today's schedule" actionLabel="Add" />
            {today.schedule.map((item) => (
                <ScheduleItem
                    key={item.id}
                    time={item.time}
                    workout={getWorkoutById(item.workoutId)}
                    status={item.status}
                    onPress={openWorkout}
                />
            ))}
        </Screen>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: spacing.xs,
    },
    goal: {
        gap: spacing.md,
    },
});
