'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: 'todos'
}

module.exports.get = ( event, context, callback) => {
    dynamoDb.get(params,(error,result) => {
        if(error){
            console.error(error);
            callback(new Error('Couldnt fetch the todos'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        };
        callback(null,response);
    });
}