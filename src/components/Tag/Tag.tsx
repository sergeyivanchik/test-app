import * as React from "react";

import './Tag.scss';

interface Props {
  text: String,
  selectTag: any,
  selectedTag: String,
  isSelectTag: Boolean
}

interface State {
  tag: String
}

class Tag extends React.Component<Props, State> {
  state = {
    tag: ''
  }

  selectTag = event => {
    this.setState({
      tag:event.target.innerHTML
    });
    this.props.selectTag(event.target.innerHTML);
  }

  selectedTag = (event) => {
    return event.target.innerHTML;
  } 

  render() {
    const { text, selectedTag } = this.props;
    const { tag } = this.state;
    return (
      <div className={`tag ${((selectedTag === tag) && (this.props.isSelectTag)) ? 'tag_selected' : ''}`} onClick={this.selectTag}>
        {text}
        {/* <span className="tag__button">R</span> */}
      </div>
    )
  }
}

export default Tag;
