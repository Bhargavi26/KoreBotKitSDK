var botId = "st-222adef3-0f3c-5e25-bda2-96bc1549fb23";
var botName = "TestWebSDK";
var sdk            = require("./lib/sdk");
var Promise        = sdk.Promise;
var qs = require('qs');
//var { makeHttpCall } = require("./makeHttpCall");
const axios = require('axios');



module.exports = {
    botId   : botId,
    botName : botName,
     on_user_message : function(requestId, data, callback) {
        sdk.sendBotMessage(data, callback);
    },
    on_bot_message  : function(requestId, data, callback) {
        sdk.sendUserMessage(data, callback);
        if(data.message == 'I am closing our current conversation as I have not received any input from you. We can start over when you need.' && generateTranscript == 'true'){
            console.log("Timeout")
        }
        // else{
        //     console.log("No Timeout")
            

            // sdk.getMessages(data, function(err, resp){
            //             if(err){
            //                 console.log(JSON.stringify(err))
            //             }else{
            //                 console.log(JSON.stringify(resp.messages))
            //             }
            //         });
// let url= 'https://platform.kore.ai/api/botsdk/stream/st-222adef3-0f3c-5e25-bda2-96bc1549fb23/getMessages?skip=0&limit=20&userId=u-8affce58-a87c-5a60-9074-c7567dda169d'
// axios.get(url, {
//     headers: {
//       'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXBwSWQiOiJjcy1mNWI0OWJkYi1hNDY4LTU4MGYtYmRmZC05YTZjNTgwY2FlZGMifQ.tVxAxMb-8VpujPFQjkYWlMaXN4R4H6BH02lEkWRoGi4',
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     console.log('Response:', JSON.stringify(response.data));
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


        // }
    },
    on_webhook      : async function(requestId, data, componentName, callback) 
    {
      
    }
};