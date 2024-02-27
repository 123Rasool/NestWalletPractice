import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  create(id: string, name: string) {
    return 'This action adds a new wallet for a specific user';
  }

  GetUserWalletDetail(id: string) {
    return `This action returns details about user wallet`;
  }

  makeCharge(id: string, amount: number) {
    return `This action will charge a wallet by #${amount} wallet`;
  }

  remove(id: string) {
    return `This action removes a #${id} wallet`;
  }
}
