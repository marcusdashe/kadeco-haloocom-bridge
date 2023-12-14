import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private readonly configService: ConfigService,
    private readonly HttpService: HttpService,
  ) {}

  testing(): string {
    const clientID = this.configService.get<string>('kadco.client_id');
    const clientSecretKey = this.configService.get<string>(
      'kadco.client_secret',
    );
    return `Client ID is ${clientID} and Client Secret Key is ${clientSecretKey}`;
  }

  async getCustomer(id: string) { 

    try {
      const tokenResponse = await firstValueFrom(
        this.HttpService.post(
          "/Connect/token",
          {
            client_id: this.configService.get<string>('kadco.client_id'),
            client_secret: this.configService.get<string>('kadco.client_secret'),
            grant_type: this.configService.get<string>('grant_type')
          },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        ).pipe(
          catchError((err: AxiosError) => { 
            throw error
          }
        )
      )
    }
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
