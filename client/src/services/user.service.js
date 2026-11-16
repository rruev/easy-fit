import api from './api';

export const update = async (userId, userData) => {
    try {
        const response = await api.put(`users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const remove = async (userId) => {
    try {
        const response = await api.delete(`users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};