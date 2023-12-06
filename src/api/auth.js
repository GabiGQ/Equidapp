import axios from "./axios";
import Cookies from "js-cookie";

export const registerRequest = (user) => {
    return axios.post(`/register`, user);
};

export const loginRequest = (user) => {
    return axios.post(`/login`, user);
};

// Esta función ya no usa el hook y espera que el token sea pasado como argumento.
export const verifyTokenRequest = (token) => {
    return axios.get('/verify', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Esta función espera recibir el userId y el token como argumentos.
export const fetchMedalsFromApi = async (userId, token) => {
    console.log('userId:', userId); // Imprime el userId

    try {
        const response = await axios.get(`/medals/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data); // Imprime los datos recibidos
        return response;
    } catch (error) {
        console.error('Error al obtener las medallas: ', error.response ? error.response.data : error);
        throw error;
    }
};


export const updateMedallas = async (userId, medalName, token) => {
    try {
      const response = await axios.put("/medals/${userId}",
        { 
          id: userId,
          nombreMedalla: medalName
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la medalla:', error);
      throw error;
    }
};

export const getMedallas = async (userId, token) => {
    try {
        const response = await axios.get(`/medals/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data); // Imprime los datos recibidos
        return response;
    } catch (error) {
        console.error('Error al obtener las medallas: ', error.response ? error.response.data : error);
        throw error;
    }
}

