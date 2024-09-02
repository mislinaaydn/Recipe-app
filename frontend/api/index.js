import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createFood = (foodData) => API.post("./food/createFood", foodData);
export const getallFood = (foodData) => API.get("./getallFood", foodData);
export const deleteFood = (id) => API.delete(`./deleteFood/${id}`);
export const fetchCategoriesWithFoods = async () => {
  try {
    const response = await axios.get("./food/categoryFood", foodData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Bir hata oluştu");
  }
};
export const getSingleFood = (id) => API.get(`getSingleFood/${id}`);
export const registerUser = (userData) => API.post(`./user/register`, userData);
export const loginUser = (userData) => API.post(`./user/login`, userData);
