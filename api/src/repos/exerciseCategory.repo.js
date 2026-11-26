import { prisma } from "../lib/prisma.js";

export const create = async (data) => {
    return await prisma.exerciseCategory.create({ data });
};

export const getAll = async (userId) => {
    return await prisma.exerciseCategory.findMany({
        where: { userId }
    });
};

export const getById = async (categoryId, userId) => {
    return await prisma.exerciseCategory.findUnique({
        where: { id: categoryId, userId }
    });
};

export const update = async (categoryId, userId, data) => {
    return await prisma.exerciseCategory.update({
        where: { id: categoryId, userId },
        data
    });
};

export const remove = async (categoryId, userId) => {
    return await prisma.exerciseCategory.delete({
        where: { id: categoryId, userId }
    });
};