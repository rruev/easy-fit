import api from './api';

export const getAll = async () => {
    const response = await api.get('/exercise-categories');
    return response.data;
};

export const getById = async (categoryId) => {
    const response = await api.get(`/exercise-categories/${categoryId}`);
    return response.data;
};

export const create = async (data) => {
    const response = await api.post('/exercise-categories', data);
    return response.data;
};

export const update = async (categoryId, data) => {
    const response = await api.put(`/exercise-categories/${categoryId}`, data);
    return response.data;
};

export const remove = async (categoryId) => {
    const response = await api.delete(`/exercise-categories/${categoryId}`);
    return response.data;
};