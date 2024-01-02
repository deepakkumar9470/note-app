import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { selectNoteById } from '../redux/noteSlice';
import leftarrow from "../assets/arrow.svg";
const NoteView = () => {
    
    const {id} = useParams()
    const note = useSelector((state) => selectNoteById(state, id));
  return (
    <div className="flex justify-center  items-center overflow-x-hidden bg-transparent  
    overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-14">
         
           <div className='w-[400px] h-[400px] flex flex-col gap-5 rounded-xl  justify-center  
           items-center bg-cardWhite   shadow duration-300 hover:bg-white hover:shadow-xl 
           gap-6 cursor-pointer'>
               <h2 className="text-3xl capitalize text-gray-700 font-bolder">{note.title}</h2>
               <p className="text-base capitalize text-gray-600">{note.body}</p>
               <Link className="w-10 h-10 text-center bg-gray-200 rounded-full cursor-pointer" to="/">

                    <img src={leftarrow} alt="leftarrow" />
                   
               </Link>
           </div>

    </div>
  )
}

export default NoteView