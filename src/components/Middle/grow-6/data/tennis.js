import api from '../../../../services/api';

export const tennisAPI = {
  // Get all fixtures
  getAll: () => api.get('/tennis/'),
  
  // Get single fixture
  getById: (id) => api.get(`/tennis/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/tennis/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/tennis/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/tennis/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/tennis/${id}/`),
  
};