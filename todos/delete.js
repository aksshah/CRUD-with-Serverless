'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.delete = ( event, context, callback) => {
    
    const params = {
        TableName: 'todos',
        Key: {
            id: event.pathParameters.id,
        }
    }

    dynamoDb.delete(params,(error) => {
        if(error){
            console.error(error);
            callback(new Error('Couldnt delete the todo item'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify({})
        };
        callback(null,response);
    });
}