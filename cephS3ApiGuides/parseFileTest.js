const Parse = require('parse/node');

// Parse.initialize('zV9Ja1RnaUYZH5o');
// Parse.serverURL = 'https://api-test.hezhong.io/api';
Parse.initialize('zV9Ja1RnaUYZH5o');
Parse.serverURL = 'http://localhost:1338/api';
const getFile = async() => {
	const query = new Parse.Query('File');
	const one = await query.first();
	console.log(one.toJSON());
};

getFile().then();