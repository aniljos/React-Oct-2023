import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props){

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if(isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/login"/>
    }
    
}

export default ProtectedRoute;

{/* <ProtectedRoute>
    <Test></Test> ==> props.children
</ProtectedRoute> */}