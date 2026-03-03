import api from '../../../../services/api';

export const basketAPI = {
  // Get all fixtures
  getAll: () => api.get('/basketball/'),
  
  // Get single fixture
  getById: (id) => api.get(`/basketball/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/basketball/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/basketball/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/basketball/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/basketball/${id}/`),
  
};