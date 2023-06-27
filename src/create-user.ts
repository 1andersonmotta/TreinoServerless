import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaClientDatabase } from "./database";

type IUserDto = {
    name: string
    username: string
}
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    const { name, username } = JSON.parse(event.body!) as IUserDto

    const result = await prismaClientDatabase.user.create({
        data: {
            name, username
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}