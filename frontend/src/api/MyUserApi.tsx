import { useAuth0 } from "@auth0/auth0-react";
import {useMutation} from "react-query"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

type CreateUserRequest = {
    auth0Id:string;
    email:string ;
} ;

//useCreateMyUser is a react hook that wraps a mutation function to create a new user using react-query
//mutation is a hook that manages writing to a data source
export const useCreateMyUser = () =>{
    const {getAccessTokenSilently} = useAuth0() ;

    const createMyUserRequest = async (user:CreateUserRequest) =>{
        const accessToken = await getAccessTokenSilently() ;
        const response = await fetch( `${API_BASE_URL}/api/my/user`,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });

        if(!response.ok){
            throw new Error("Failed to create user") ;
        }
    } ;

    //isLoading: a boolean indication whether the mutation is currently in progress.
    //isError: a boolean indication whether the mutation has failed
    //isSuccess:a boolean indication whether the mutation has succeeded
    //useCreateMyUser is a hook that provides a way to create a new user by making a POST request to an API endpoint, and it returns an object with properties to track the status of the mutation.

    const {mutateAsync:
        createUser,
        isLoading,
        isError,
        isSuccess} = useMutation(createMyUserRequest) ;

        return {
            createUser,
            isLoading,
            isError,
            isSuccess,
        };
};