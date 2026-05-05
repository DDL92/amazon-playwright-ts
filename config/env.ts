import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://www.amazon.com',
  language: process.env.LANGUAGE ?? 'es_US'
};