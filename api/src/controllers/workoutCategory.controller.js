import { workoutCategoryService } from "../services/index.js";
import { getErrors } from "../utils/errors.util.js";

export const create = async (req, res) => {
    try {
        const category = await workoutCategoryService.create(req.user.id, req.body);
        res.status(201).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const getAll = async (req, res) => {
    try {
        const categories = await workoutCategoryService.getAll(req.user.id);
        res.status(200).json(categories);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const getById = async (req, res) => {
    try {
        const category = await workoutCategoryService.getById(req.params.id, req.user.id);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const update = async (req, res) => {
    try {
        const category = await workoutCategoryService.update(req.params.id, req.user.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const remove = async (req, res) => {
    try {
        const category = await workoutCategoryService.remove(req.params.id, req.user.id);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};
