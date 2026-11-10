import { userService } from "../services/index.js";
import { updateUserSchema } from "../schemas/user.schema.js";
import { getErrors } from "../utils/errors.util.js";

export const update = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await updateUserSchema.validateAsync(req.body);
        const updatedUser = await userService.update(userId, user);
        res.json({
            id: updatedUser.id,
            email: updatedUser.email
        });
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
}

export const remove = async (req, res) => {
    const userId = req.params.id;
    try {
        await userService.remove(userId);
        res.json({ message: "User removed successfully" });
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const getAll = async (req, res) => {
    try {
        const users = await userService.getAll(req.query);
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};

export const getById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userService.findById(userId);
        res.json({
            id: user.id,
            email: user.email
        });
    } catch (error) {
        res.status(400).json({ error: getErrors(error) });
    }
};