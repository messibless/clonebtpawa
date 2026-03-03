import api from '../../../../services/api';

export const liveAPI = {
  // Get all fixtures
  getAll: () => api.get('/live/'),
  
  // Get single fixture
  getById: (id) => api.get(`/live/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/live/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/live/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/live/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/live/${id}/`),
  
};