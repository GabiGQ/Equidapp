import React, { createContext, useState, useContext } from 'react';
import { fetchMedalsFromApi } from '../api/auth'; // Asume que esta es la función para obtener las medallas
// Crear el contexto de medallas
export const MedalsContext = createContext();

// Crear un hook personalizado para acceder al contexto de medallas
export const useMedals = () => {
    const context = useContext(MedalsContext);
    if (!context) {
        throw new Error('useMedals must be used within a MedalsProvider');
    }
    return context;
};

// Crear el proveedor de contexto de medallas
export const MedalsProvider = ({ children }) => {
    const [medals, setMedals] = useState(() => {
        // Intenta recuperar las medallas del localStorage o establece un array vacío si no hay ninguna
        const savedMedals = localStorage.getItem('medals');
        return savedMedals ? JSON.parse(savedMedals) : [];
    });

    // Define cómo se obtienen las medallas, posiblemente pasando el userId como argumento
    const [loading, setLoading] = useState(false);

    const getMedals = async (userId) => {
        setLoading(true); // Inicia el indicador de carga
        try {
            const medalsData = await fetchMedalsFromApi(userId);
            if (medalsData) {
                console.log('Medallas obtenidas:', medalsData); // Agrega esto para depuración
                setMedals(medalsData);
                localStorage.setItem('medals', JSON.stringify(medalsData));
            } else {
                console.log('No se recibieron medallas desde la API');
            }
        } catch (error) {
            console.error('Error al obtener las medallas:', error);
        } finally {
            setLoading(false); // Finaliza el indicador de carga
        }
    };
    
    
    return (
        <MedalsContext.Provider value={{ medals, getMedals, loading }}>
            {children}
        </MedalsContext.Provider>
    );}