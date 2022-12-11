import { API_ENDPOINTS } from '../../config';
import { ApiService } from './apiService';

class GoalManagementService extends ApiService {
  getEmployeeGoals(params) {
    return this.get(API_ENDPOINTS.goal.employeeGoal, params);
  }

  getEmployerGoals(params) {
    return this.get(API_ENDPOINTS.goal.employerGoal, params);
  }

  getEmployeeGoal(id) {
    return this.get(`${API_ENDPOINTS.goal.employeeGoal}/${id}/`);
  }

  getEmployers(params) {
    return this.get(API_ENDPOINTS.goal.employers, params);
  }

  addEmployeeGoal(data) {
    return this.post(API_ENDPOINTS.goal.employeeGoal, data);
  }

  editEmployeeGoal(id, data) {
    return this.put(`${API_ENDPOINTS.goal.employeeGoal}/${id}/`, data);
  }

  editEmployerGoal(id, data) {
    return this.put(`${API_ENDPOINTS.goal.employerGoal}/${id}/`, data);
  }
}

export default new GoalManagementService();
