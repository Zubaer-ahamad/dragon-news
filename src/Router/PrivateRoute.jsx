import { PropTypes } from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvide";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};