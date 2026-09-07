import api from './api.service';

// Requests are sent as JavaScript objects; Axios handles serialization.
export const login = (email, password) =>
  api.post('/auth/login', { email, password });

export const register = (name, email, password) =>
  api.post('/auth/register', { name, email, password });

export const forgotPassword = (email) =>
  api.post('/auth/forgot-password', { email });
