import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
  return(
    <>
     <Link to="user/profile" className= "flex bg-white items-center font-bold hover:text-orange-500">
     <Button className="flex items-center px-3 font-bold hover:bg-gray-500">
        Log Out
     </Button>
     </Link>
    </>
  )
}

export default MobileNavLinks;