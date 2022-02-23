import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* https://localhost:3000/getConvertedAmount/CLP/USD/15000 */

  @Get('/getConvertedAmount/:from/:to/:amount')
  async getConvertedAmount(@Param('from') from: string, @Param('to') to: string, @Param('amount') amount: string) {
    return await this.appService.getConvertedAmount(from, to, amount);
  }

  /* https://localhost:3000/getDaysUntilMyBirthday/15-03-2021 */

  @Get('/getDaysUntilMyBirthday/:birthdate')
  getDaysUntilMyBirthday(@Param('birthdate') birthdate: string) {  
    return this.appService.getDaysUntilMyBirthday(birthdate);
  }

  /* https://localhost:3000/getTheNumber/192/3 */

  @Get('/getTheNumber/:first/:second')
  getTheNumber(@Param('first') first: number, @Param('second') second: number) {
    return this.appService.getTheNumber(first, second);
  }
}
