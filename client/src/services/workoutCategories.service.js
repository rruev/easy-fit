import api from './api';

export const getAll = async () => {
    const response = await api.get('/workout-categories');
    return response.data;
};

export const getById = async (categoryId) => {
    const response = await api.get(`/workout-categories/${categoryId}`);
    return response.data;
};

export const create = async (data) => {
    const response = await api.post('/workout-categories', data);
    return response.data;
};

export const update = async (categoryId, data) => {
    const response = await api.put(`/workout-categories/${categoryId}`, data);
    return response.data;
};

export const remove = async (categoryId) => {
    const response = await api.delete(`/workout-categories/${categoryId}`);
    return response.data;
};