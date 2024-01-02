import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editNote } from "../redux/noteSlice";
import leftarrow from "../assets/arrow.svg";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const existingNotes = notes.filter((item) => item.id === id);
  console.log(existingNotes);
  const { title, body } = existingNotes[0];

  const [inputs, setInputs] = useState({
    title,
    body,
  });

  const handleEditNote = () => {
    setInputs({ title: "", body: "" });
    dispatch(
      editNote({
        id: id,
        title: inputs.title,
        body: inputs.body,
      })
    );
    navigate("/");
  };
  return (
    <div
      className="flex justify-center  items-center overflow-x-hidden bg-transparent  
    overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-14"
    >
      <form className="w-[500px] px-10 py-10 flex flex-col gap-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl text-gray-800 font-bold text-center">
          Update Your Note!
        </h1>
        <input
          className="bg-gray-50 w-full rounded-md outline-none border placeholder:text-gray-600  px-10 py-2"
          type="text"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          placeholder="Title"
        />
        <input
          className="bg-gray-50  w-full placeholder:text-gray-600 rounded-md outline-none border px-10 py-2"
          type="text"
          value={inputs.body}
          onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          placeholder="Description"
        />
        <button
          onClick={handleEditNote}
          className="bg-blue-400 text-white text-lg font-bold 
               rounded-md px-10 py-2"
        >
          Submit
        </button>

        <Link
          className="w-6 h-6 text-center bg-gray-200 rounded-full cursor-pointer"
          to="/"
        >
          <img src={leftarrow} alt="leftarrow" />
        </Link>
      </form>
    </div>
  );
};

export default EditNote;
