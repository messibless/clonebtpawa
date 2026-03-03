import api from '../../../../services/api';

export const efootballAPI = {
  // Get all fixtures
  getAll: () => api.get('/efootball/'),
  
  // Get single fixture
  getById: (id) => api.get(`/efootball/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/efootball/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/efootball/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/efootball/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/efootball/${id}/`),
  
};