var storage = require('node-persist');
storage.initSync();

/*var accounts  = [{
	username : 'nazi',
	password : 1377
},
{
	username : 'niloo',
	password : 1373
}];
/*
accounts.push({
	username : 'shabi',
	password : 1365
});
storage.setItemSync('accounts', accounts);*/
var accounts = storage.getItemSync('accounts');


console.log(accounts);