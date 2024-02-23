import { DioAccount } from './DioAccount'

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    this.setBalance(this.getBalance() + value + 10)
    console.log(`Depósito de ${value} efetuado com sucesso!`)

  }
}
