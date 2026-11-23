import { useEffect, useState } from "react";

export default function useCategories(service) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const data = await service.getCategories();
            setCategories(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, loading };
}