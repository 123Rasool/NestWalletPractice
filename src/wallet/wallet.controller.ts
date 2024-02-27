import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) { }

  @Get()
  getWalletDetail(@Param('id') id: string) {
    return this.walletService.GetUserWalletDetail(id);
  }

  @Post('/charge')
  chargeWallet(@Param('id') id: string, @Param('amount') amount: number) {
    return this.walletService.makeCharge(id, amount);
  }

  @Post('/create')
  createWallet(@Param('id') id: string, @Param('name') name: string) {
    return this.walletService.create(id, name);
  }

  @Delete()
  deleteWallet(@Param('id') id: string) {
    return this.walletService.remove(id);
  }
}
