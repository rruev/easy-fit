import { prisma } from "../lib/prisma.js";

export const create = async (data) => {
    return await prisma.exercise.create({
        data
    });
};

export const getAll = async (userId, filter) => {
    return await prisma.exercise.findMany({
        where: {
            userId: userId,
            name: {
                contains: filter.search || "",
                mode: "insensitive"
            },
            categoryId: filter.category || undefined
        },
        take: filter.limit || 10,
        skip: filter.skip || 0,
        include: {
            category: true
        }
    });
};

export const getById = async (exerciseId) => {
    return await prisma.exercise.findUnique({
        where: { id: exerciseId },
        include: {
            category: true
        }
    });
};

export const update = async (exerciseId, userId, data) => {
    return await prisma.exercise.update({
        where: { id: exerciseId, userId: userId },
        data
    });
};

export const remove = async (exerciseId, userId) => {
    return await prisma.exercise.delete({
        where: { id: exerciseId, userId: userId }
    });
};


export const getCount = async (userId, filter) => {
    return await prisma.exercise.count({
        where: {
            userId: userId,
            name: {
                contains: filter.search || "",
                mode: "insensitive"
            },
            categoryId: filter.category || undefined
        }
    });
};