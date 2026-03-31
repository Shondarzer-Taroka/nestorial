import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer-interface';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }
}
