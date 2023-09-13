import PropTypes from 'prop-types';
import {  FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const { title, author, cover, reading_time, author_img, posted_date, hashtags} = blog;
    // console.log(blog)
    return (
        <div className='mb-16'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex justify-center items-center mb-4'>
                    <img className='h-10 w-10' src={ author_img} alt="" />
                    <div className='ml-4'>
                    <h1>{author}</h1>
                    <p>{posted_date}</p>
                    </div>

                </div>
               

                <div>
                <p>{reading_time} min read  <span><button 
                onClick={() => handleAddToBookmark(blog)}
                className='ml-2 text-2 text-red-500'><FaBookmark></FaBookmark></button></span></p>
                
                
               
                </div>

            </div>
            <h2 className='text-4xl' >{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                    
                }
            </p>
            <button onClick={() =>handleMarkAsRead(reading_time)} className='text-purple-700 underline'>Mark As Read</button>
            
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;