import handler from "@notes/core/handler";
import {Table} from "sst/node/table";
import dynamodb from "@notes/core/dynamodb";


export const main = handler(async (event) => {
    const data = JSON.parse(event.body || "{}");

    const params = {
        TableName: Table.Notes.tableName,
        Key: {
            userId: "123",
            noteId: event?.pathParameters?.id,
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null,
        },
        ReturnValues: "ALL_NEW",
    };

    const result = await dynamodb.update(params);
    console.log("RESULT :", result);

    return JSON.stringify(result.Attributes);
});