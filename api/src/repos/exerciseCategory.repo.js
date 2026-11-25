import { prisma } from "../lib/prisma.js";

export const create = async (data) => {
    return await prisma.exerciseCategory.create({ data });
};

export const getAll = async () => {
    return await prisma.exerciseCategory.findMany();
};

export const getById = async (categoryId) => {
    return await prisma.exerciseCategory.findUnique({
        where: { id: categoryId }
    });
};

export const update = async (categoryId, data) => {
    return await prisma.exerciseCategory.update({
        where: { id: categoryId },
        data
    });
};

export const remove = async (categoryId) => {
    return await prisma.exerciseCategory.delete({
        where: { id: categoryId }
    });
};