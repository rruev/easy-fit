import { workoutService } from '../services/index.js';
import { getErrors } from "../utils/errors.util.js";

export const create = async (req, res) => {
    const userId = req.user.id;
    const data = req.body;
    try {
        const workout = await workoutService.create({ ...data, userId });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json(getErrors(error));
    }
};

export const getAll = async (req, res) => {
    const userId = req.user.id;
    const filter = req.query;
    try {
        const workouts = await workoutService.getAll(userId, filter);
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json(getErrors(error));
    }
};

export const getById = async (req, res) => {
    const userId = req.user.id;
    const workoutId = req.params.id;
    try {
        const workout = await workoutService.getById(workoutId, userId);
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(getErrors(error));
    }
};

export const update = async (req, res) => {
    const userId = req.user.id;
    const workoutId = req.params.id;
    const data = req.body;
    try {
        const workout = await workoutService.update(workoutId, userId, data);
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(getErrors(error));
    }
};

export const remove = async (req, res) => {
    const userId = req.user.id;
    const workoutId = req.params.id;
    try {
        const workout = await workoutService.remove(workoutId, userId);
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json(getErrors(error));
    }
};