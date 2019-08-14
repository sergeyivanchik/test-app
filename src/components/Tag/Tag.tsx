import * as React from "react";

import { DeleteOutlineOutlined } from '../../../node_modules/@material-ui/icons';
import './Tag.scss';

interface Props {
  text: string,
  selectTag: any,
  selectedTag: string,
  isTagSelected: boolean,
  removeTag: any
}

interface State {
  tag: string
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

  selectedTag = event => {
    return event.target.innerHTML;
  } 

  render() {
    const { text, selectedTag } = this.props;
    const { tag } = this.state;

    return (
      <div 
        className={`tag ${selectedTag === tag && this.props.isTagSelected ? 'tag_selected' : ''}`}
        onClick={this.selectTag}
      >
        {text}

        <span className="tag__remove" onClick={this.props.removeTag}><DeleteOutlineOutlined /></span>
      </div>
    )
  }
}

export default Tag;
