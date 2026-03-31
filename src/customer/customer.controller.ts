import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './interfaces/customer-interface';
import { CreateCustomerDto } from './dto/create-customer-dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  createCustomer(@Body() createCustomerdto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerdto);
  }

  @Get()
  getAllCustomers(): Customer[] {
    return this.customerService.getAllCustomers();
  }
}
