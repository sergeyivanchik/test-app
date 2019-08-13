import * as React from "react";

import './Tag.scss';

interface Props {
  text: String
}

class Tag extends React.Component<Props> {

  render() {
      return (
          <div className="tag">
            {this.props.text}
            <span className="tag__button">R</span>
          </div>
      )
  }
}

export default Tag;
