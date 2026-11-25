import { exerciseCategoryService } from "../services/index.js";
import { getErrors } from "../utils/errors.util.js";

export const create = async (req, res) => {
    try {
        const category = await exerciseCategoryService.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const getAll = async (req, res) => {
    try {
        const categories = await exerciseCategoryService.getAll();
        res.status(200).json(categories);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const getById = async (req, res) => {
    try {
        const category = await exerciseCategoryService.getById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const update = async (req, res) => {
    try {
        const category = await exerciseCategoryService.update(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};

export const remove = async (req, res) => {
    try {
        const category = await exerciseCategoryService.remove(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ error: errors });
    }
};
