const axios = require('axios');
const details = require('./details.json');
require('dotenv').config();

// compare current date with date of birth and send message if they match
details.forEach(element => {
    const date = new Date();
    const current_date = date.getDate();
    const current_month = date.getMonth() + 1;

    const dob = element.dob.split('-');
    const dob_date = dob[0];
    const dob_month = dob[1];

    if (dob_date == current_date && dob_month == current_month) {
        const options = {
            method: 'POST',
            url: `https://api.ultramsg.com/${process.env.WA_INSTANCE_ID}/messages/chat`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: {
                token: `${process.env.WA_TOKEN}`,
                to: `+91${element.number}`,
                body: `I mean, you have ME so I don’t know what else you have to wish for…but go off I guess…Happy birthday ${element.name}! 😄`,
                priority: '10',
                referenceId: ''
            }
        };

        axios(options)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    }
});
