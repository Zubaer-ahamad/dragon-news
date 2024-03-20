import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const SingleNews = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3">
                <div className="col-span-2"></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default SingleNews;