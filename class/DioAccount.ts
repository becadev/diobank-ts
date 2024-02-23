export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }



  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      console.log(`Depósito de ${value} efetuado com sucesso!`)
    }
    this.balance += value

  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      console.log(`Saque de ${value} efetuado com sucesso!`)
      this.balance -= value
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value;

  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }

  public getStatus = (): boolean => {
    return this.status
  }


}
