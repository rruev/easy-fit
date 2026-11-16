import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { authService } from '../services';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = useCallback(async (credentials) => {
        try {
            const userData = await authService.login(credentials);
            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const register = useCallback(async (credentials) => {
        try {
            const userData = await authService.register(credentials);
            setUser(userData);
        } catch (error) {
            throw error;
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await authService.logout();
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const fetchUser = useCallback(async () => {
        try {
            const userData = await authService.getUser();
            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const contextValue = useMemo(() => ({ 
        user, 
        setUser, 
        fetchUser,
        login,
        register,
        logout
    }), [
        user, 
        setUser, 
        fetchUser,
        login,
        register,
        logout
    ]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

