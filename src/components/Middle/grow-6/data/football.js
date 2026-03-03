import api from '../../../../services/api';

export const footballAPI = {
  // Get all fixtures
  getAll: () => api.get('/football/'),
  
  // Get single fixture
  getById: (id) => api.get(`/football/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/football/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/football/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/football/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/football/${id}/`),
  
};