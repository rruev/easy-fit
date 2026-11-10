import { prisma } from "../lib/prisma.js";

export const create = async (data) => {
    return prisma.user.create({
        data
    });
};

export const findByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email }
    });
};

export const update = async (userId, data) => {
    return prisma.user.update({
        where: { id: userId },
        data
    });
};

export const remove = async (userId) => {
    return prisma.user.delete({
        where: { id: userId }
    });
};

export const findById = async (userId) => {
    return prisma.user.findUnique({
        where: { id: userId }
    });
};

export const findAll = async (filter) => {
    return prisma.user.findMany({
        where: {
            email: {
                contains: filter.search || "",
                mode: "insensitive"
            }
        },
        take: filter.limit || 10,
        skip: filter.skip || 0
    });
};