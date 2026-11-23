import api from "./api";

export const getAll = async (filter, signal) => {
    try {
        const response = await api.get("/exercises", { params: filter, signal });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const create = async (data) => {
    try {
        const response = await api.post("/exercises", data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getById = async (exerciseId, signal) => {
    try {
        const response = await api.get(`/exercises/${exerciseId}`, { signal });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const update = async (exerciseId, data) => {
    try {
        const response = await api.put(`/exercises/${exerciseId}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const remove = async (exerciseId) => {
    try {
        const response = await api.delete(`/exercises/${exerciseId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await api.get("/exercises/categories");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};