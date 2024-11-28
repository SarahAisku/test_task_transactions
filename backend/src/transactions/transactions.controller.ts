import { Controller, Post, Get, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './entities/transactions.entity';

@Controller('api/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() transactionData: Partial<Transaction>) {
    return this.transactionsService.create(transactionData);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    const transactions = await this.transactionsService.findAll();
    console.log("Найденные транзакции:", transactions);
    return transactions;
  }
}
