import api from '../../../../services/api';

export const betAPI = {
  // Get all fixtures
  getAll: () => api.get('/bets/'),
  
  // Get single fixture
  getById: (id) => api.get(`/bets/${id}/`),
  
  // Create fixture
  create: (data) => api.post('/bets/', data),
  

  // Update fixture (full)
  update: (id, data) => api.put(`/bets/${id}/`, data),
  
  // Update fixture (partial)
  patch: (id, data) => api.patch(`/bets/${id}/`, data),
  

  // Delete fixture
  delete: (id) => api.delete(`/bets/${id}/`),
  
};