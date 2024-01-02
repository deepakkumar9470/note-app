import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../redux/noteSlice";
import { v4 as uuidv4 } from "uuid";

const AddNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const handleAddNote = () => {
    setInputs({ title: "", body: "" });
    dispatch(
      addNote({
        id: uuidv4(),
        title: inputs.title,
        body: inputs.body,
      })
    );
    navigate("/");
  };
  return (
    <div
      className="flex justify-center  items-center overflow-x-hidden bg-transparent  
    overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <form className="w-[500px] px-10 py-10 flex flex-col gap-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl text-gray-800 font-bold text-center">
          Add Your Note!
        </h1>
        <input
          className="
                     bg-gray-50 
                     w-full
                     placeholder:text-gray-600 
                     rounded-md outline-none 
                     border px-10 py-2"
          type="text"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="
                 bg-gray-50 
                 placeholder:text-gray-600 
                 w-full 
                 rounded-md 
                 outline-none border px-10 py-2"
          type="text"
          value={inputs.body}
          onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          placeholder="Description"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-400 text-white text-lg font-bold 
               rounded-md px-10 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
