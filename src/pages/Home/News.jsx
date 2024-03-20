import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const { author, _id, title, image_url, details } = news;
    return (
        <div>
            <div className='bg-slate-200 flex justify-start items-center p-4'>
                <img className='w-10 rounded-full' src={author.img} alt="" />
                <div>
                    <h3>{author.name}</h3>
                    <h4>{author.published_date}</h4>
                </div>
            </div>
            <div className="card card-compact mb-10 bg-base-100 shadow-xl">
                <h2 className="card-title ms-2 mt-2 mb-2">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/singleNews/${_id}`} className='text-red-400 font-bold'>Read More</Link></p> : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default News;

News.propTypes = {
    news: PropTypes.object
}