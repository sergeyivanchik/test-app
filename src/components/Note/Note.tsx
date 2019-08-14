import * as React from "react";

import { DeleteOutlineOutlined, Edit } from '../../../node_modules/@material-ui/icons';
import './Note.scss'


interface Props {
  note: String,
  removeNote(): void,
  viewNote: any,
  editNote: any,
  isTagSelected: boolean
  noteForEdit: number,
  saveChangesToNote: any
  tags: string[],
  noteIndex: number
}

interface State {
  editedNote: string
}

class Note extends React.Component<Props, State> {
  state = {
    editedNote: ''
  }

  editingNote = event => {
    this.setState({
      editedNote: event.target.value
    })
  };

  saveNote = () => {
    this.props.saveChangesToNote({
      index: this.props.noteIndex,
      text: this.state.editedNote
    });
  };

  render() {
    const { noteForEdit, noteIndex, viewNote, note, removeNote, editNote, tags } = this.props;

    return (
      noteForEdit !== noteIndex
        ? <div className="note">
            <div className="note__text" onClick={viewNote}>
              {
                note.split(' ').map(element => {
                  return tags.find(tag => tag === element)
                    ? <span className="note__tag"> {element + ' '} </span>
                    : element + ' '
                })
              }
            </div>

            <div className="note__buttons">
              <span className='note__change' onClick={editNote} > <Edit /> </span>
              <span className='note__remove' onClick={removeNote}> <DeleteOutlineOutlined /> </span>
            </div>
          </div>
        : <div className="note">
            <textarea onChange={this.editingNote}>
              { note }
            </textarea>

            <span className='note__save' onClick={this.saveNote} > Save </span>
          </div>
    );
  };
};

export default Note;
