import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl mt-3 mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-2xl mb-4 font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;