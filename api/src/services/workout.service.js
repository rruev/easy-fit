import { workoutRepo } from '../repos/index.js ';

export const create = async (data) => {
    const duration = 10;
    return await workoutRepo.create({ ...data, duration });
};

export const getAll = async (userId, filter) => {
    return await workoutRepo.getAll(userId, filter);
};

export const getById = async (workoutId, userId) => {
    return await workoutRepo.getById(workoutId, userId);
};

export const update = async (workoutId, userId, data) => {
    return await workoutRepo.update(workoutId, userId, data);
};

export const remove = async (workoutId, userId) => {
    return await workoutRepo.remove(workoutId, userId);
};