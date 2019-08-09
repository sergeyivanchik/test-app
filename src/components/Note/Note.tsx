import * as React from "react";

import './Note.scss'


interface Props {
  text: String,
  noteIndex: Number,
  remove: any,
  view: any,
  change: any
}

class Note extends React.Component<Props> {
  render() {
      return (
          <div className="note">
            <div className="note__text" onClick={this.props.view}>
              {this.props.text}
            </div>
            <div className="note__buttons">
              <span className='note__remove' onClick={this.props.remove}> R </span>
              <span className='note__change' onClick={this.props.change}> C </span>
            </div>
          </div>
      )
  }
}

export default Note;
