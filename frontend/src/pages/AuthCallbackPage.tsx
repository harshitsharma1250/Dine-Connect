import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate() ;
  const {user} = useAuth0() ; //Acces to current loggedin user
  const {createUser, } = useCreateMyUser() ;

  const hasCreatedUser = useRef(false) ;

  // Create a new user in the backend when they log in
  useEffect(() => {
    if(user?.sub && user?.email &&  !hasCreatedUser.current){
        createUser({auth0Id:user.sub, email:user.email}) ;
        hasCreatedUser.current = true ;  // Prevent duplicate user creation on refresh or re-login
    }
    navigate("/") ;
  }, [createUser, navigate, user]);

  return <>Loading....</>
};

export default AuthCallbackPage;