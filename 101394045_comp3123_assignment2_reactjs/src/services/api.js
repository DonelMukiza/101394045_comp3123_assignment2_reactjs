import axios from "axios";

// Define base URLs for users and employees
const USER_API_BASE_URL = "http://localhost:3000/api/v1/users";
const EMPLOYEE_API_BASE_URL = "http://localhost:3000/api/v1/emp";

// User-related API functions
export const login = async (credentials) => {
  return await axios.post(`${USER_API_BASE_URL}/login`, credentials);
};

export const signup = async (userData) => {
  return await axios.post(`${USER_API_BASE_URL}/signup`, userData);
};

// Employee-related API functions
export const getEmployees = async () => {
  return await axios.get(`${EMPLOYEE_API_BASE_URL}/employees`);
};

export const getEmployeeById = async (id) => {
  return await axios.get(`${EMPLOYEE_API_BASE_URL}/employees/${id}`);
};

export const addEmployee = async (employeeData) => {
  return await axios.post(`${EMPLOYEE_API_BASE_URL}/employees`, employeeData);
};

export const updateEmployee = async (id, employeeData) => {
  return await axios.put(`${EMPLOYEE_API_BASE_URL}/employees/${id}`, employeeData);
};

export const deleteEmployee = async (id) => {
  return await axios.delete(`${EMPLOYEE_API_BASE_URL}/employees/${id}`);
};