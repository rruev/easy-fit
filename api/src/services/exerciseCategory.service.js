import { exerciseCategoryRepo } from "../repos/index.js";

export const create = async (data) => {
    return await exerciseCategoryRepo.create(data);
};

export const getAll = async () => {
    return await exerciseCategoryRepo.getAll();
};

export const getById = async (categoryId) => {
    return await exerciseCategoryRepo.getById(categoryId);
};

export const update = async (categoryId, data) => {
    return await exerciseCategoryRepo.update(categoryId, data);
};

export const remove = async (categoryId) => {
    return await exerciseCategoryRepo.remove(categoryId);
};
