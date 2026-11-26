import { useEffect, useState } from "react";

export default function useItem(service, itemId, addMode = false) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchItems = async (filter = {}, signal) => {
        try {
            setLoading(true);
            setItems([]);
            const data = await service.getAll(filter, signal);
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.error(JSON.stringify(error.response.data));
            setLoading(false);
        }
    };

    const fetchItem = async (signal) => {
        try {
            setLoading(true);
            const data = await service.getById(itemId, signal);
            setItem(data);
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
            setItems(prevItems => ({ ...prevItems, exercises: [...prevItems.exercises, newItem] }));
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
            setItems(prevItems => ({ ...prevItems, exercises: prevItems.exercises.map(item => item.id === itemId ? updatedItem : item) }));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const deleteItem = async (id) => {
        try {
            setLoading(true);
            await service.remove(id);
            setItems(prevItems => ({ ...prevItems, exercises: prevItems.exercises.filter(item => item.id !== id) }));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
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

    }, [itemId, addMode]);

    return {
        items,
        item,
        setItems,
        loading,
        fetchItems,
        fetchItem,
        createItem,
        updateItem,
        deleteItem
    };
}