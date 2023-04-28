import axios, { CreateAxiosDefaults } from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const options: CreateAxiosDefaults = {
  timeout: 3000,
  baseURL: BASE_URL,
};

export const ax = axios.create({
  ...options,
});
