import { useEffect, useState } from "react";

export default function useItem(service, itemId, addMode = false) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateList = (update) => {
        setItems(prevItems => {
            if (Array.isArray(prevItems)) return update(prevItems);
            return { ...prevItems, exercises: update(prevItems.exercises) };
        });
    };

    const fetchItems = async (filter = {}, signal) => {
        try {
            setLoading(true);
            setError(null);
            setItems([]);
            const data = await service.getAll(filter, signal);
            setItems(data);
        } catch (error) {
            if (!signal?.aborted) {
                console.error(error);
                setError(error);
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchItem = async (signal) => {
        try {
            setLoading(true);
            setError(null);
            const data = await service.getById(itemId, signal);
            setItem(data);
        } catch (error) {
            if (!signal?.aborted) {
                console.error(error);
                setError(error);
            }
        } finally {
            setLoading(false);
        }
    };

    const createItem = async (data) => {
        try {
            setLoading(true);
            setError(null);
            const newItem = await service.create(data);
            updateList(items => [...items, newItem]);
            return true;
        } catch (error) {
            console.error(error);
            setError(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const updateItem = async (data) => {
        try {
            setLoading(true);
            setError(null);
            const updatedItem = await service.update(itemId, data);
            setItem(updatedItem);
            updateList(items => items.map(item => item.id === itemId ? updatedItem : item));
            return true;
        } catch (error) {
            console.error(error);
            setError(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const deleteItem = async (id) => {
        try {
            setLoading(true);
            setError(null);
            await service.remove(id);
            updateList(items => items.filter(item => item.id !== id));
            return true;
        } catch (error) {
            console.error(error);
            setError(error);
            return false;
        } finally {
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
        error,
        fetchItems,
        fetchItem,
        createItem,
        updateItem,
        deleteItem
    };
}