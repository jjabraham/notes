import handler from "@notes/core/handler";
import {Table} from "sst/node/table";
import dynamodb from "@notes/core/dynamodb";


export const main = handler(async (event) => {
    const params = {
        TableName: Table.Notes.tableName,
        Key: {
            userId: "123",
            noteId: event?.pathParameters?.id,
        }
    };

    const result = await dynamodb.delete(params);
    console.log("response: ", result.Attributes);

    return JSON.stringify({ status: true });
});