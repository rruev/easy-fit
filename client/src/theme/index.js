import { DarkTheme } from '@react-navigation/native';

export const colors = {
    background: '#0B0F14',
    surface: '#151B23',
    surfaceAlt: '#1E2630',
    border: '#27303C',
    text: '#F3F6FA',
    textMuted: '#8D99AA',
    primary: '#B6F34A',
    onPrimary: '#0B0F14',
    danger: '#FF5D6C',
    success: '#3DDC97',
    warning: '#FFB84C',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
};

export const radius = {
    sm: 8,
    md: 14,
    lg: 20,
    pill: 999,
};

export const categoryColors = {
    Strength: '#FF8A4C',
    Cardio: '#4CC9F0',
    HIIT: '#FF5D6C',
    Mobility: '#B18CFF',
};

// React Navigation reads this to style headers, tab bars and screen backgrounds
export const navigationTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: colors.primary,
        background: colors.background,
        card: colors.surface,
        text: colors.text,
        border: colors.border,
        notification: colors.danger,
    },
};
