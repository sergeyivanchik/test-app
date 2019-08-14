import * as React from "react";

import './Note.scss'


interface Props {
  note: String,
  noteIndex: Number,
  removeNote: any,
  viewNote: any,
  editNote: any,
  noteForEdit: Number,
  saveChangesToNote: any
}

interface State {
  editedNote: String
}

class Note extends React.Component<Props, State> {
  state = {
    editedNote: ''
  }

  editingNote = event => {
    this.setState({
      editedNote: event.target.value
    })
  }

  saveNote = () => {
    this.props.saveChangesToNote({
      index: this.props.noteIndex,
      text: this.state.editedNote
    });
  }

  render() {
    const { noteForEdit,noteIndex, viewNote, note, removeNote, editNote } = this.props;
    return (noteForEdit !== noteIndex 
      ? <div className="note">
          <div className="note__text" onClick={viewNote}>
            {note}
          </div>
          <div className="note__buttons">
            <span className='note__remove' onClick={removeNote}> R </span>
            <span className='note__change' onClick={editNote} > C </span>
          </div>
        </div>
      : <div className="note">
          <textarea onChange={this.editingNote}>{note}</textarea>

          <span className='note__save' onClick={this.saveNote} > S </span>
        </div>
    )
  }
}

export default Note;
