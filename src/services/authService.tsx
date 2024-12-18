import axios from "axios";

const API_URL = "http://localhost:3000";

export const login = async (Email: string, Password: string) => {
  const response = await axios.post(`${API_URL}/login`, { Email, Password });
  return response.data.token; // Assuming the token is returned
};
