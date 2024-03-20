import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import swimming from '../../../assets/qZone1.png'
import classImg from '../../../assets/qZone2.png'
import play from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div >
                <h1 className="text-xl font-bold">Login With</h1>
                <Link className="btn-sm border w-full flex items-center justify-center gap-2 mt-4 mb-2"><span><FaGoogle /></span> Login With Google</Link>
                <Link className="btn-sm border w-full flex items-center justify-center gap-2"><span><FaGithub /></span> Login With Github</Link>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-bold mb-4">Find Us On</h1>
                <Link className="btn-sm border w-full py-6 flex items-center gap-2"><span><FaFacebook className="text-blue-700" /></span> Facebook</Link>
                <Link className="btn-sm border w-full py-6 flex items-center gap-2"><span><FaTwitter className="text-blue-600" /></span> Twitter</Link>
                <Link className="btn-sm border w-full py-6 flex items-center gap-2"><span><FaInstagram className="text-orange-700" /></span> Instagram</Link>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-3 mt-4">Q-Zone</h1>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;