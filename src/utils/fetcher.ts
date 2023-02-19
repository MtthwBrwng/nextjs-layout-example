import {Auth} from "@aws-amplify/auth";
import aws from "../aws-exports";

export const fetcher = <TData, TVariables>(query: string, variables?: TVariables) => {
    return async (): Promise<TData> => {
        const currentSession = await Auth.currentSession()
        const jwtToken = currentSession?.getIdToken()?.getJwtToken()

        const res = await fetch(aws.aws_appsync_graphqlEndpoint, {
            method: "POST",
            ...({"headers": {"Content-Type": "application/json", "Authorization": jwtToken}}),
            body: JSON.stringify({query, variables}),
        });

        const json = await res.json();

        if (json.errors) {
            const {message} = json.errors[0];

            throw new Error(message);
        }

        return json.data;
    }
}