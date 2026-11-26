import { Pressable, StyleSheet, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { useState } from 'react';

import AppText from './AppText';
import Card from './Card';
import TextField from './TextField';
import Button from './Button';

import { colors, exerciseCategoryColors, radius, spacing } from '../theme';

export default function CategoryForm({ category, onCancel, onAction, loading, error }) {
    const [name, setName] = useState(category?.name ?? '');
    const [color, setColor] = useState(category?.color ?? colors.primary);
    const [validationError, setValidationError] = useState(null);

    const handleAction = async() => {
        if (!name) {
            setValidationError({ name: 'Name is required' });
            return;
        }
        setValidationError(null);

        if (category) {
            await onAction(category.id, { name, color });
            onCancel();
        } else {
            await onAction({ name, color });
            onCancel();
        }
    }

    return (
        <Card style={styles.container}>
            <AppText variant="subheading">
                {category ? 'Edit category' : 'New category'}
            </AppText>
            <TextField
                label="Name"
                name="name"
                placeholder="e.g. Chest"
                value={name}
                onChangeText={setName}
            />
            <View style={styles.colorPicker}>
                <AppText variant="caption" muted>COLOR</AppText>
                <View style={styles.swatches}>
                    {Object.entries(exerciseCategoryColors).map(([label, value]) => {
                        const selected = color.toUpperCase() === value.toUpperCase();
                        return (
                            <Pressable
                                key={value}
                                accessibilityRole="radio"
                                accessibilityLabel={`${label} color`}
                                accessibilityState={{ checked: selected }}
                                onPress={() => setColor(value)}
                                style={[styles.swatch, { backgroundColor: value }]}
                            >
                                {selected && <Icon name="check" size={22} color={colors.onPrimary} />}
                            </Pressable>
                        );
                    })}
                </View>
            </View>
            <Button
                title={category ? 'Save changes' : 'Add category'}
                icon="check"
                onPress={handleAction}
                loading={loading}
            />
            {validationError?.name && <AppText variant="caption" style={{ color: colors.danger }}>{validationError.name}</AppText>} 
            {error && <AppText variant="caption" style={{ color: colors.danger }}>{error.general}</AppText>}
            <Button title="Cancel" variant="secondary" onPress={onCancel} />
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: spacing.lg,
    },
    colorPicker: {
        gap: spacing.sm,
    },
    swatches: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    swatch: {
        width: 44,
        height: 44,
        borderRadius: radius.pill,
        alignItems: 'center',
        justifyContent: 'center',
    },
});