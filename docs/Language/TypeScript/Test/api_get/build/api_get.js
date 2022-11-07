"use strict";
var axios = require('axios');
var axios_config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts'
};
axios(axios_config).then(function (response) {
    let result = response.data;
    console.log(result[0].title);
    console.log(result[0].id);
    console.log(result[0].body);
    console.log(result[0].userId);
}).catch(function (error) {
    console.log(error);
});
