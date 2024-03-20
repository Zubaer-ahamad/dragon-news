import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import News from "./News";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    {
                        news.map(aNews => <News key={aNews._id} news={aNews}></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;