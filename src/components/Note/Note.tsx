import * as React from "react";

import './Note.scss'


interface Props {
  note: String,
  removeNote: any,
  viewNote: any,
  changeNote: any,
  tags: string[]
}

class Note extends React.Component<Props> {
  render() {
    const { note, removeNote, viewNote, changeNote, tags } = this.props
    return (
        <div className="note">
          <div className="note__text" onClick={viewNote}>
            {
              note.split(' ').map(element => {
                if (tags.find(tag => tag === element)) {
                  return <span className="note__tag">{element + ' '}</span>
                } else  
                    return element + ' '
              })
            }
          </div>
          <div className="note__buttons">
            <span className='note__remove' onClick={removeNote}> R </span>
            <span className='note__change' onClick={changeNote}> C </span>
          </div>
        </div>
    )
  }
}

export default Note;
