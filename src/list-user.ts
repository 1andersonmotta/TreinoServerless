import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaClientDatabase } from "./database";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const result = await prismaClientDatabase.user.findMany()

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}