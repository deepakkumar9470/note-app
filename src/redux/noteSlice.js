import {createSlice} from '@reduxjs/toolkit'



const loadState = () => {
    try {
      const serializedState = localStorage.getItem('notes');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('notes', serializedState);
    } catch (err) {
      console.log(err)
    }
  };



const noteSlice = createSlice({
    name : 'note',
    initialState :  { notes: loadState() || [] },
    reducers : { 

        addNote : (state,action) =>{
            state.notes.unshift(action.payload)
            saveState(state.notes);
        },
        editNote : (state,action) =>{

            const {id,title,body} = action.payload;
            const existingNotes = state.notes.find(item=>item.id === id);
            if(existingNotes){
                existingNotes.title = title;
                existingNotes.body = body;

            }
            saveState(state.notes);

        },
        deleteNote : (state,action) =>{
          state.notes = state.notes.filter(note => note.id !== action.payload);
          saveState(state.notes);
            // const {id} = action.payload;
            // const existingNotes = state.notes.find(item => item.id === id)
            // if(existingNotes){
            //    return state.notes.filter(note => note.id !== id);

            // }

        }
    }
});


export const {addNote,editNote,deleteNote} = noteSlice.actions;
export const selectNoteById = (state, noteId) =>
  state.notes.notes.find((note) => note.id === noteId);

export default noteSlice.reducer;