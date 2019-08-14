import * as React from "react";

import { AddCircleOutlineOutlined, DeleteOutlineOutlined } from '../../node_modules/@material-ui/icons';
import Note from './Note/Note';
import Tag from './Tag/Tag';
import './MainPage.scss';
import { addTag } from '../utils';

interface IProps {}
interface IState {
  note: string,
  notes: string[],
  tags: string[],
  selectedTag: string,
  isTagSelected: boolean
  noteForEdit: number
}

class MainPage extends React.Component<IProps, IState> {
  state = { 
    note: '',
    notes: [],
    tags: [],
    selectedTag: '',
    isTagSelected: false,
    noteForEdit: -1
  }

  selectTag = (tag: string) => {
    this.setState({
      selectedTag: tag,
      isTagSelected: !this.state.isTagSelected
    });
  };

  handlerInputChange = event => {
    this.setState({
      note: event.target.value
    });
  };

  createNote = () => {
    if (!this.state.note) {
      alert("Empty data!!!");

      return;
    }

    this.setState({
      notes: [...this.state.notes, this.state.note],
      tags: Array.from(new Set([...this.state.tags, ...addTag(this.state.note, true)])),
      isTagSelected: false,
      selectedTag: ''
    })
  }

  createTag = () => {
    this.state.note
      ? this.setState({ tags: Array.from(new Set([...this.state.tags, ...addTag(this.state.note, false)])) })
      : alert("Empty data!!!");
  };

  removeTag = (index: number) => {
    this.state.tags.splice(index, 1);

    this.setState({tags: this.state.tags});
  };

  removeNote = (index: number) => {
    this.state.notes.splice(index, 1);

    this.setState({
      notes: this.state.notes
    });
  };

  editNote = (index: number) => {
    this.setState({
      noteForEdit: index
    });
  };

  viewNote = (index: number) => {
    alert(this.state.notes[index]);
  };

  viewAllNotes = () => {
    this.setState({
      isTagSelected: false,
      selectedTag: ''
    });
  };

  filterNotesByTag = () => {
    const { notes, selectedTag, isTagSelected } = this.state;

    return isTagSelected
      ? notes.filter(words => !!(words.includes(selectedTag) || words.includes(selectedTag.slice(1))))
      : notes;
  }

  saveChangesToNote = ({ index, text }) => {
    this.state.notes[index] = text;

    this.setState({
      notes: this.state.notes,
      noteForEdit: -1
    });
  }

  render() {
    const { tags, selectedTag } = this.state;

    return (
      <div className="list-note">
        <span className="list-note__label"> Add your own note or tag </span>

        <input type="text" onChange={this.handlerInputChange} className="list-note__note-text"/>
        <div className="list-note__buttons">
          <div className="list-note__add-tag" onClick={this.createTag}>
            <AddCircleOutlineOutlined />
            <span>Tag</span>
          </div>

          <div className="list-note__add-note" onClick={this.createNote}>
            <AddCircleOutlineOutlined />
            <span>Note</span>
          </div>
        </div>

        {
          this.state.notes.length
            ? <span className="list-note__all-notes" onClick={this.viewAllNotes}>All notes</span>
            : ''
        }

        {tags.length
          ? <div className="list-note__tags">
              {
                tags.map((element: string, index: number) => {
                  return (
                    <Tag 
                      text={element}
                      key={index + element}
                      selectTag={this.selectTag}
                      selectedTag={selectedTag}
                      isTagSelected={this.state.isTagSelected}
                      removeTag={() => this.removeTag(index)}
                    />
                  );
                })
              }
            </div>
          : ''
        }

        <div className="list-note__notes">
          {
            this.filterNotesByTag()
              .map((element, index) => (
                <Note
                  key={index + element}
                  note={element}
                  noteIndex={index}
                  removeNote={() => this.removeNote(index)}
                  viewNote={() => this.viewNote(index)}
                  isTagSelected={this.state.isTagSelected}
                  noteForEdit={this.state.noteForEdit}
                  editNote={() => this.editNote(index)}
                  saveChangesToNote={this.saveChangesToNote}
                  tags={this.state.tags}
                />
              ))
          }
        </div>
      </div>
    )
  }
}

export default MainPage;
