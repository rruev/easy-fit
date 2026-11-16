import api from "./api";

export const getAll = async (filter) => {
    const response = await api.get("/exercises", { params: filter });
    return response.data;
};

export const create = async (data) => {
    const response = await api.post("/exercises", data);
    return response.data;
};

export const getById = async (exerciseId) => {
    const response = await api.get(`/exercises/${exerciseId}`);
    return response.data;
};

export const update = async (exerciseId, data) => {
    const response = await api.put(`/exercises/${exerciseId}`, data);
    return response.data;
};

export const remove = async (exerciseId) => {
    const response = await api.delete(`/exercises/${exerciseId}`);
    return response.data;
};

export const getCategories = async () => {
    const response = await api.get("/exercises/categories");
    return response.data;
};