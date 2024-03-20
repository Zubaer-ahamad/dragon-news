import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="bg-slate-100 flex p-2">
            <button className="btn btn-secondary px-8">Latest</button>
            <Marquee className="text-2xl" speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;