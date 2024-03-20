import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-center text-4xl font-semibold">Please Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Do not Have An Account ? <Link to="/register" className="text-red-600">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;