import handler from "@notes/core/handler";
import {Table} from "sst/node/table";
import dynamodb from "@notes/core/dynamodb";


export const main = handler(async (event) => {
    const params = {
        TableName: Table.Notes.tableName,
        Key: {
            userId: event.requestContext.authorizer?.iam.cognitoidentity.identityId,
            noteId: event?.pathParameters?.id,
        }
    };

    const result = await dynamodb.get(params);
    if (!result.Item) {
        throw new Error("Item not found");
    }

    return JSON.stringify(result.Item);
});