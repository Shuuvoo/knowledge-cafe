import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 m-4 border-b-2 ml-[5%] mr-[5%]'>
            <h1 className='text-3xl font-extrabold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />


            
        </header>
    );
};

export default Header;
