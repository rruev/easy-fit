import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { authService, userService } from '../services';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = useCallback(async (credentials) => {
        try {
            const userData = await authService.login(credentials);
            setUser(userData);
        } catch (error) {
            console.error(error.response?.data?.errors);
            throw error;
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
            console.error(error.response?.data?.errors);
            throw error;
        }
    }, []);

    const fetchUser = useCallback(async () => {
        try {
            const userData = await authService.getUser();
            setUser(userData);
        } catch (error) {
            console.error(error.response?.data?.errors);
        }
    }, []);

    const deleteAccount = useCallback(async (userId) => {
        try {
            await userService.remove(userId);
            setUser(null);
        } catch (error) {
            console.error(error.response?.data?.errors);
            throw error;
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
        logout,
        deleteAccount
    }), [
        user, 
        setUser, 
        fetchUser,
        login,
        register,
        logout,
        deleteAccount
    ]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

