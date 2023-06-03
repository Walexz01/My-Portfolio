import dotenv from 'dotenv';
dotenv.config();

const { VITE_APP_SERVICE_ID, VITE_TEMPLATE_ID,VITE_PUBLIC_KEY } = process.env;

export const config = {
  serviceId: VITE_APP_SERVICE_ID,
  templateId: VITE_TEMPLATE_ID,
  publicKey: VITE_PUBLIC_KEY,
};
