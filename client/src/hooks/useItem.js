import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function useItem(service, itemId, addMode=false) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async (filter = {}, signal) => {
        try {
            setLoading(true);
            const data = await service.getAll(filter, signal);
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const fetchItem = async (signal) => {
        try {
            setLoading(true);
            const data = await service.getById(itemId, signal);
            setItems([data]);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const createItem = async (data) => {
        try {
            setLoading(true);
            const newItem = await service.create(data);
            setItems(prevItems => [...prevItems, newItem]);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const updateItem = async (data) => {
        try {
            setLoading(true);
            const updatedItem = await service.update(itemId, data);
            setItems(prevItems => prevItems.map(item => item.id === itemId ? updatedItem : item));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const deleteItem = async () => {
        try {
            setLoading(true);
            await service.remove(itemId);
            setItems(prevItems => prevItems.filter(item => item.id !== itemId));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            const controller = new AbortController();
            const signal = controller.signal;

            if (addMode) {
                return () => controller.abort();
            }

            if (itemId) {
                fetchItem(signal);
            } else {
                fetchItems({}, signal);
            }

            return () => controller.abort();
        }, [itemId, addMode])
    );

    return {
        items,
        setItems,
        loading,
        fetchItems,
        fetchItem,
        createItem,
        updateItem,
        deleteItem
    };
}