import * as React from "react";

import './Tag.scss';

interface Props {
  text: String,
  selectTag: any,
  selectedTag: String
}

interface State {
  tag: String
}

class Tag extends React.Component<Props, State> {
  state = {
    tag: '_'
  }

  selectTag = event => {
    this.setState({
      tag: event.target.innerHTML.slice(1)
    });
    this.props.selectTag(event.target.innerHTML.slice(1));
  }

  selectedTag = (event) => {
    return event.target.innerHTML;
  } 

  render() {
    const { text, selectedTag } = this.props;
    const { tag } = this.state;
    return (
      <div className={`tag ${selectedTag === tag ? 'tag_selected' : ''}`} onClick={this.selectTag}>
        {text}
        {/* <span className="tag__button">R</span> */}
      </div>
    )
  }
}

export default Tag;
