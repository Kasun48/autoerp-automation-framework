import { APIClient } from '../../core/apiClient';

export class WorkOrderAPI {
  static async create(order: any) {
    return APIClient.post('/workorders', order);
  }
}
