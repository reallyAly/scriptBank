export class Customer{
	_firstname;
	_lastname;
	_taxvat;

	constructor(firstname,lastname,taxvat)
	{
		this._firstname = firstname;
		this._lastname = lastname;
		this._taxvat = taxvat;
	}

	get taxvat()
	{
		return this._taxvat;
	}


}