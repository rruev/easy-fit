import { exerciseService } from "../services/index.js";
import { getErrors } from "../utils/errors.util.js";

export const create = async (req, res) => {
    const userId = req.user.id;
    try {
        const data = req.body;
        const exercise = await exerciseService.create(userId, data);
        res.status(201).json(exercise);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const getAll = async (req, res) => {
    const userId = req.user.id;
    const filter = req.query;
    try {
        const exercises = await exerciseService.getAll(userId, filter);
        res.status(200).json(exercises);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const getById = async (req, res) => {
    const exerciseId = req.params.id;
    try {
        const exercise = await exerciseService.getById(exerciseId);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const update = async (req, res) => {
    const exerciseId = req.params.id;
    const userId = req.user.id;
    const data = req.body;
    try {
        const exercise = await exerciseService.update(exerciseId, userId, data);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const remove = async (req, res) => {
    const exerciseId = req.params.id;
    const userId = req.user.id;
    try {
        const exercise = await exerciseService.remove(exerciseId, userId);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};