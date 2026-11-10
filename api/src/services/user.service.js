import { userRepo } from "../repos/index.js";

export const create = async (data) => {
    if (data.confirmPassword) {
        delete data.confirmPassword;
    }

    return userRepo.create(data);
};

export const findByEmail = async (email) => {
    return userRepo.findByEmail(email);
};

export const update = async (userId, data) => {
    return userRepo.update(userId, data);
};

export const remove = async (userId) => {
    return userRepo.remove(userId);
};

export const findById = async (userId) => {
    return userRepo.findById(userId);
};

export const getAll = async (filter) => {
    return userRepo.findAll(filter);
};