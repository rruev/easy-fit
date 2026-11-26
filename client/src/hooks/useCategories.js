import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function useCategories(service) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const data = await service.getAll();
            setCategories(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const addCategory = async (category) => {
        try {
            setLoading(true);
            const newCategory = await service.create(category);
            setCategories((prev) => [...prev, newCategory]);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const updateCategory = async (categoryId, updatedCategory) => {
        try {
            setLoading(true);
            const editedCategory = await service.update(categoryId, updatedCategory);
            setCategories((prev) => prev.map((category) => category.id === categoryId ? editedCategory : category));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            setLoading(true);
            await service.remove(categoryId);
            setCategories((prev) => prev.filter((category) => category.id !== categoryId));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchCategories();
        }, [])
    );

    return { categories, loading, error, addCategory, updateCategory, deleteCategory };
}