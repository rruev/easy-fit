import api from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await api.post('auth/register', userData);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await api.post('auth/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    try {
        const response = await api.get('auth/me');
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        throw error;
    }
};