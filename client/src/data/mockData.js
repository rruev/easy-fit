export const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    memberSince: 'March 2026',
};

export const categories = ['Strength', 'Cardio', 'HIIT', 'Mobility'];

export const workouts = [
    {
        id: '1',
        name: 'Upper Body Power',
        category: 'Strength',
        level: 'Intermediate',
        duration: 45,
        description: 'Heavy compound lifts for chest, back and shoulders. Focus on controlled reps and full rest between sets.',
        exercises: [
            { id: '1-1', name: 'Bench Press', sets: 4, target: '8 reps', rest: 90 },
            { id: '1-2', name: 'Bent-over Row', sets: 4, target: '8 reps', rest: 90 },
            { id: '1-3', name: 'Overhead Press', sets: 3, target: '10 reps', rest: 75 },
            { id: '1-4', name: 'Pull-ups', sets: 3, target: '6 reps', rest: 75 },
            { id: '1-5', name: 'Dumbbell Curl', sets: 3, target: '12 reps', rest: 60 },
        ],
    },
    {
        id: '2',
        name: 'Morning Run',
        category: 'Cardio',
        level: 'Beginner',
        duration: 30,
        description: 'Easy-paced outdoor run to start the day. Keep a pace where you can still hold a conversation.',
        exercises: [
            { id: '2-1', name: 'Warm-up walk', sets: 1, target: '5 min', rest: 0 },
            { id: '2-2', name: 'Steady run', sets: 1, target: '20 min', rest: 0 },
            { id: '2-3', name: 'Cool-down walk', sets: 1, target: '5 min', rest: 0 },
        ],
    },
    {
        id: '3',
        name: 'HIIT Blast',
        category: 'HIIT',
        level: 'Advanced',
        duration: 25,
        description: 'Short, intense intervals with minimal rest. Give everything in the work periods.',
        exercises: [
            { id: '3-1', name: 'Burpees', sets: 5, target: '40 sec', rest: 20 },
            { id: '3-2', name: 'Mountain Climbers', sets: 5, target: '40 sec', rest: 20 },
            { id: '3-3', name: 'Jump Squats', sets: 5, target: '40 sec', rest: 20 },
        ],
    },
    {
        id: '4',
        name: 'Mobility Flow',
        category: 'Mobility',
        level: 'Beginner',
        duration: 20,
        description: 'Gentle full-body stretching routine to loosen up hips, shoulders and spine.',
        exercises: [
            { id: '4-1', name: 'Cat-Cow', sets: 2, target: '60 sec', rest: 10 },
            { id: '4-2', name: "World's Greatest Stretch", sets: 2, target: '45 sec', rest: 10 },
            { id: '4-3', name: 'Hip Opener', sets: 2, target: '60 sec', rest: 10 },
        ],
    },
    {
        id: '5',
        name: 'Leg Day',
        category: 'Strength',
        level: 'Intermediate',
        duration: 55,
        description: 'Squat-focused session with accessory work for quads, hamstrings and glutes.',
        exercises: [
            { id: '5-1', name: 'Back Squat', sets: 5, target: '5 reps', rest: 120 },
            { id: '5-2', name: 'Romanian Deadlift', sets: 4, target: '8 reps', rest: 90 },
            { id: '5-3', name: 'Walking Lunges', sets: 3, target: '12 reps', rest: 60 },
        ],
    },
];

export const getWorkoutById = (id) => workouts.find((workout) => workout.id === id);

export const today = {
    label: 'Saturday, 14 November',
    completed: 1,
    total: 3,
    schedule: [
        { id: 't1', time: '07:30', workoutId: '2', status: 'done' },
        { id: 't2', time: '12:15', workoutId: '3', status: 'next' },
        { id: 't3', time: '18:30', workoutId: '1', status: 'upcoming' },
    ],
};

export const weekDays = [
    { key: 'mon', label: 'Mon', date: 9 },
    { key: 'tue', label: 'Tue', date: 10 },
    { key: 'wed', label: 'Wed', date: 11 },
    { key: 'thu', label: 'Thu', date: 12 },
    { key: 'fri', label: 'Fri', date: 13 },
    { key: 'sat', label: 'Sat', date: 14 },
    { key: 'sun', label: 'Sun', date: 15 },
];

export const weekSchedule = {
    mon: [{ id: 'w1', time: '18:00', workoutId: '1', status: 'done' }],
    tue: [{ id: 'w2', time: '07:30', workoutId: '2', status: 'done' }],
    wed: [
        { id: 'w3', time: '18:00', workoutId: '5', status: 'done' },
        { id: 'w4', time: '21:00', workoutId: '4', status: 'done' },
    ],
    thu: [],
    fri: [{ id: 'w5', time: '07:30', workoutId: '3', status: 'done' }],
    sat: today.schedule,
    sun: [{ id: 'w6', time: '10:00', workoutId: '4', status: 'upcoming' }],
};

export const stats = [
    { id: 's1', icon: 'fitness-center', value: '24', label: 'Workouts', color: '#B6F34A' },
    { id: 's2', icon: 'timer', value: '18h', label: 'Total time', color: '#4CC9F0' },
    { id: 's3', icon: 'local-fire-department', value: '6', label: 'Day streak', color: '#FF8A4C' },
    { id: 's4', icon: 'emoji-events', value: '3', label: 'Records', color: '#B18CFF' },
];

export const weeklyActivity = [
    { id: 'a1', label: 'M', minutes: 45 },
    { id: 'a2', label: 'T', minutes: 30 },
    { id: 'a3', label: 'W', minutes: 75 },
    { id: 'a4', label: 'T', minutes: 0 },
    { id: 'a5', label: 'F', minutes: 25 },
    { id: 'a6', label: 'S', minutes: 30 },
    { id: 'a7', label: 'S', minutes: 0 },
];

export const categoryStats = [
    { category: 'Strength', count: 12 },
    { category: 'Cardio', count: 6 },
    { category: 'HIIT', count: 4 },
    { category: 'Mobility', count: 2 },
];
