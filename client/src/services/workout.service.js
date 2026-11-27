import api from './api.js';

export const getAll = async (filter, signal) => {
  const response = await api.get('/workouts', {
    params: filter,
    signal,
  });
  return response.data;
};

export const getById = async (workoutId, signal) => {
  const response = await api.get(`/workouts/${workoutId}`, { signal });
  return response.data;
};

export const create = async (data) => {
  const response = await api.post('/workouts', data);
  return response.data;
};

export const update = async (workoutId, data) => {
  const response = await api.put(`/workouts/${workoutId}`, data);
  return response.data;
};

export const remove = async (workoutId) => {
  const response = await api.delete(`/workouts/${workoutId}`);
  return response.data;
};