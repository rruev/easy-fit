import { exerciseCategoryRepo } from "../repos/index.js";

export const create = async (userId, data) => {
    const { name, color } = data;
    return await exerciseCategoryRepo.create({ name, color, userId });
};

export const getAll = async (userId) => {
    return await exerciseCategoryRepo.getAll(userId);
};

export const getById = async (categoryId, userId) => {
    return await exerciseCategoryRepo.getById(categoryId, userId);
};

export const update = async (categoryId, userId, data) => {
    const { name, color } = data;
    return await exerciseCategoryRepo.update(categoryId, userId, { name, color });
};

export const remove = async (categoryId, userId) => {
    return await exerciseCategoryRepo.remove(categoryId, userId);
};
