import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {

    let course=props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function likedHandler()
    {
        if(likedCourses.includes(course.id))
        {
            // already liked hai , remove krdo 
            // kese kare filter function use karlo
            setLikedCourses((prev)=> prev.filter((cid)=>cid!==course.id) )   
            // vo lickedCourses wale array se hat gaya
            toast.warning("Like Removed!");
        }
        else
        {
            // phle se add nahi hai new add krna hai
            if(likedCourses.length===0)
            {
                //pura empty
                setLikedCourses([course.id]); // ek he id set krdi    
            }
            else
            {
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    
   return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>
           
            <div className='absolute right-2 bottom-[-12px] w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                <button onClick={likedHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem"></FcLike>) :
                        (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            
            </div>

        </div>
        <div className='text-white p-4 text-lg leading-6'>
            <p className='font-bold'>{course.title}</p>
            <p className='mt-2 text-sm'>
            {
                course.description.length>100 ? 
                (course.description.substring(0,100)) + "...." : (course.description) 
            }
                
            </p>

        </div>
    </div>
   )
}

export default Card
