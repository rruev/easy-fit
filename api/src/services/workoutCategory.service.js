import { workoutCategoryRepo } from "../repos/index.js";

export const create = async (userId, data) => {
    const { name, color } = data;
    return await workoutCategoryRepo.create({ name, color, userId });
};

export const getAll = async (userId) => {
    return await workoutCategoryRepo.getAll(userId);
};

export const getById = async (categoryId, userId) => {
    return await workoutCategoryRepo.getById(categoryId, userId);
};

export const update = async (categoryId, userId, data) => {
    const { name, color } = data;
    return await workoutCategoryRepo.update(categoryId, userId, { name, color });
};

export const remove = async (categoryId, userId) => {
    return await workoutCategoryRepo.remove(categoryId, userId);
};
