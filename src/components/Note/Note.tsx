import * as React from "react";

import './Note.scss'


interface Props {
  note: String,
  noteIndex: Number,
  removeNote: any,
  viewNote: any,
  changeNote: any
}

class Note extends React.Component<Props> {
  render() {
      return (
          <div className="note">
            <div className="note__text" onClick={this.props.viewNote}>
              {this.props.note}
            </div>
            <div className="note__buttons">
              <span className='note__remove' onClick={this.props.removeNote}> R </span>
              <span className='note__change' onClick={this.props.changeNote}> C </span>
            </div>
          </div>
      )
  }
}

export default Note;
