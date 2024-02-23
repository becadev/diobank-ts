import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(20)
peopleAccount.setBalance(500)
peopleAccount.getStatus()
peopleAccount.getBalance()
peopleAccount.getName()
console.log(`A conta da ${peopleAccount.getName()} tem um saldo de ${peopleAccount.getBalance()} e está ${peopleAccount.getStatus() ? 'ativa' : 'inativa'}.`)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(20)
companyAccount.setBalance(500)
companyAccount.getStatus()
companyAccount.getName()
companyAccount.getLoan(1000)
companyAccount.getBalance()
console.log(`A conta da ${companyAccount.getName()} tem um saldo de ${companyAccount.getBalance()} e está ${companyAccount.getStatus() ? 'ativa' : 'inativa'}.`)

const specialAccount: SpecialAccount = new SpecialAccount('Ana', 30)
specialAccount.setBalance(500)
specialAccount.withdraw(20)
specialAccount.deposit(100)
specialAccount.getName()
specialAccount.getBalance()
specialAccount.getStatus()
console.log(`A conta da ${specialAccount.getName()} tem um saldo de ${specialAccount.getBalance()} e está ${specialAccount.getStatus() ? 'ativa' : 'inativa'}.`)


