import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly configService: ConfigService) {}

  testing(): string {
    const clientID = this.configService.get<string>('kadco.client_id');
    const clientSecretKey = this.configService.get<string>(
      'kadco.client_secret',
    );
    return `Client ID is ${clientID} and Client Secret Key is ${clientSecretKey}`;
  }
  // create(createCustomerDto: CreateCustomerDto) {
  //   return 'This action adds a new customer';
  // }

  // findAll() {
  //   return `This action returns all customer`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`;
  // }

  // update(id: number, updateCustomerDto: UpdateCustomerDto) {
  //   return `This action updates a #${id} customer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} customer`;
  // }
}
