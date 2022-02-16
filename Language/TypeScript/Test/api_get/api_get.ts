/*
 * @Author: your name
 * @Date: 2021-07-17 18:47:54
 * @LastEditTime: 2021-07-17 19:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\ProgrammingLanguage\TypeScript\Test\api_get\api_get.ts
 */
declare function require(name:string):any;

var axios = require('axios');
interface Post{
    userId:number;
    id:number;
    title:string;
    body:string
}

var axios_config = {
    method:'get',
    url:'https://jsonplaceholder.typicode.com/posts'
};

axios(axios_config).then(
    function(response:any){
        let result = response.data as Post[];
        console.log(result[0].title);
        console.log(result[0].id);
        console.log(result[0].body);
        console.log(result[0].userId);
    }
).catch(
    function(error:any){
        console.log(error);
    }
)
