import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import ActivityBars from '../components/ActivityBars';
import ProgressBar from '../components/ProgressBar';
import { categoryStats, stats, weeklyActivity } from '../data/mockData';
import { categoryColors, spacing } from '../theme';

const totalWorkouts = categoryStats.reduce((sum, item) => sum + item.count, 0);

export default function DashboardScreen() {
    return (
        <Screen scroll>
            <View style={styles.grid}>
                <StatCard {...stats[0]} />
                <StatCard {...stats[1]} />
            </View>
            <View style={styles.grid}>
                <StatCard {...stats[2]} />
                <StatCard {...stats[3]} />
            </View>

            <SectionHeader title="This week" />
            <Card>
                <ActivityBars data={weeklyActivity} />
            </Card>

            <SectionHeader title="Completed by category" />
            <Card style={styles.categories}>
                {categoryStats.map((item) => (
                    <ProgressBar
                        key={item.category}
                        label={item.category}
                        valueLabel={`${item.count} workouts`}
                        progress={item.count / totalWorkouts}
                        color={categoryColors[item.category]}
                    />
                ))}
            </Card>
        </Screen>
    );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        gap: spacing.lg,
    },
    categories: {
        gap: spacing.lg,
    },
});
