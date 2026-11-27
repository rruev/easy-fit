import { prisma } from '../lib/prisma.js';

export const create = async (data) => {
    return prisma.workout.create({
        data: {
            ...data,
            exercises: {
                create: data.exercises || []
            }
        }
    });
};

export const getAll = async (userId, filter) => {
    return prisma.workout.findMany({
        where: {
            userId: userId,
            name: {
                contains: filter.search || "",
                mode: "insensitive"
            },
            categoryId: filter.category || undefined
        },
        take: filter.limit || undefined,
        skip: filter.skip || 0,
        include: {
            category: true,
            exercises: {
                include: {
                    exercise: true
                }
            }
        },
        orderBy: {
            name: "asc"
        }
    });
};

export const getById = async (workoutId, userId) => {
    return prisma.workout.findUnique({
        where: { id: workoutId, userId: userId },
        include: {
            category: true,
            exercises: {
                include: {
                    exercise: true
                }
            }
        }
    });
};


export const update = async (workoutId, userId, data) => {
    return prisma.workout.update({
        where: { id: workoutId, userId: userId },
        data,
    });
};

export const remove = async (workoutId, userId) => {
    return prisma.workout.delete({
        where: { id: workoutId, userId: userId },
    });
};