import Vehicle from './Vehicle';
import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Truck extends Vehicle {
  /**
   * Truck Object extending base Vehicle for Nagel-Schreckenberg model.
   *
   * @param {int} id
   * @param {int} x
   * @param {int} y
   * @param {int} destinationId
   */
  constructor(id, x, y, destinationId) {
    super(id, x, y, destinationId, VEHICLE_TYPE.TRUCK, 0, 8);
  }
}
