import React, { useState, useEffect } from "react";
import edit from "../assets/edit.svg";
import view from "../assets/eye.svg";
import trash from "../assets/trash.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteNote } from "../redux/noteSlice";

const Home = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const notesdata = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notesdata.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteNote = (id) => {
    // setShowConfirmationModal(true);
    alert("Are You sure want  to delete");
    dispatch(deleteNote(id));
    // setShowConfirmationModal(false)
  };

  return (
    <div className="p-10 flex flex-col  items-center justify-center mt-20">
      <div className="w-[300px] md:w-[800px] mt-2 mb-6">
        <input
          className="w-full px-10 py-3 rounded-full border outline-none 
                      bg-gray-100 placeholder:text-gray-600"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Note.."
        />
      </div>

      <div className="flex  items-center justify-center flex-wrap gap-10">
        {filteredNotes?.map((item, i) => (
          <div
            key={i}
            className="w-[300px] h-[200px] flex flex-col gap-5 bg-cardWhite px-10 py-4
                       md:w-[300px] md:h-[150px]
                       rounded-md cursor-pointer shadow-[0 8px 32px 0 rgba( 31, 38, 135, 0.37 )] border-[1px solid rgba( 255, 255, 255, 0.18 )] filter-[blur(4px)]
                       hover:scale-110 transition-all duration-150"
          >
            <h2 className="text-2xl text-center md:text-start text-gray-800 capitalize drop-shadow-md font-bolder  cursor-pointer">
              {item.title}
            </h2>
            <p className="text-base text-center md:text-start truncate text-gray-400 capitalize cursor-pointe">
              {item.body}
            </p>
            <div className="flex items-end justify-end gap-4">
              <Link to={`edit-note/${item.id}`}>
                <img
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-150"
                  src={edit}
                  alt="edit"
                />
              </Link>
              <Link to={`view-note/${item.id}`}>
                <img
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-150"
                  src={view}
                  alt="view"
                />
              </Link>

              <img
                className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-150"
                src={trash}
                alt="trash"
                onClick={() => handleDeleteNote(item.id)}
              />
            </div>
          </div>
        ))}

        {showConfirmationModal && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Delete Note
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this note?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => handleDeleteNote(item.id)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowConfirmationModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
