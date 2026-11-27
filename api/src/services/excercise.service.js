import { exerciseRepo } from "../repos/index.js";

export const create = async (userId, data) => {
    return await exerciseRepo.create({ ...data, userId });
};

export const getAll = async (userId, filter) => {
    if (filter.skip) {
        filter.skip = Number(filter.skip) || 0;
    }
    if (filter.limit) {
        filter.limit = Number(filter.limit) || 10;
    }
    const exercises = await exerciseRepo.getAll(userId, filter);
    const count = await exerciseRepo.getCount(userId, filter);
    return { exercises, count };
};

export const getById = async (exerciseId) => {
    return await exerciseRepo.getById(exerciseId);
};

export const update = async (exerciseId, userId, data) => {
    return await exerciseRepo.update(exerciseId, userId, data);
};

export const remove = async (exerciseId, userId) => {
    return await exerciseRepo.remove(exerciseId, userId);
};