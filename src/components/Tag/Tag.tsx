import * as React from "react";

import './Tag.scss';

interface Props {
  text: String,
  removeTag: any
}

class Tag extends React.Component<Props> {

  render() {
    const { text } = this.props;
    return (
      <div className="tag">
        {text}
        <span className="tag__remove" onClick={this.props.removeTag}>R</span>
      </div>
    )
  }
}

export default Tag;
