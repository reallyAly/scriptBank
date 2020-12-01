import {Customer} from './Customer.js';

export class Account{
	static counter;
	_customer;
	_agency;
	_balance;

	constructor(customer, agency, balance)
	{
		this.customer = customer;
		this._agency = agency;
		this._balance = balance;
		Account.counter += 1;
	}

	set customer(customer)
	{
		if(customer instanceof Customer)
		{
			this._customer = customer;
		}
	}

	get customer()
	{
		return this._customer;
	}

	get balance()
	{
		return this._balance;
	}

	withdraw(amount){

		if(this._balance == 0 && this._balance <= amount){
			return;
		}

		this._balance -= amount;

		return this._balance;

	}

	deposit(amount){

		if(amount <= 0) return;

		this._balance += amount;

	}

	transfer(amount, account){

		const amountWithdrawn = this.withdraw(amount);

		account.deposit = amountWithdrawn;
		
	}

}

