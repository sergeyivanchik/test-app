import * as React from "react";

import Note from './Note/Note';
import Tag from './Tag/Tag'
import './MainPage.scss';
import { addTag } from '../utils'

interface IProps {}
interface IState {
    note: String,
    notes: string[],
    tags: string[],
    noteForEdit: Number
}

class MainPage extends React.Component<IProps, IState> {
    state = { 
        note: '',
        notes: [],
        tags: [],
        noteForEdit: -1
    }

    handlerInputChange = event => 
        this.setState({
            note: event.target.value
        })

    createNote =  () => {
        if (this.state.note) {
            this.setState({
                notes: [...this.state.notes, this.state.note],
                tags: Array.from(new Set([...this.state.tags, ...addTag(this.state.note, true)]))
            });
        } else { alert("Empty data!!!"); }
    }

    createTag = () => {
        if (this.state.note) {
            this.setState({
                tags: Array.from(new Set([...this.state.tags, ...addTag(this.state.note, false)]))
            })
        } else { alert("Empty data!!!"); }
    }

    removeTag = index => {
        this.state.tags.splice(index,1);
        this.setState({tags: this.state.tags})
    }

    removeNote = index => {
        this.state.notes.splice(index,1);
        this.setState({notes: this.state.notes})
    }

    editNote = index => {
        this.setState({
            noteForEdit: index
        })
    }

    viewNote = index => {
        alert(this.state.notes[index])
    }

    saveChangesToNote = ({index, text}) => {
        this.state.notes[index] = text;
        this.setState({
            notes: this.state.notes,
            noteForEdit: -1
        })
    }

    render() {
        return (
            <div className="list-note">
                <input type="text" onChange={this.handlerInputChange} className="list-note__note-text"/>
                <div className="list-note__buttons">
                    <span className="list-note__add-tag" onClick={this.createTag}> Add tag </span>
                    <span className="list-note__add-note" onClick={this.createNote}> Add note </span>
                </div>

                <div className="list-note__tags">
                    {this.state.tags.map((element, index) => { 
                        return <Tag text={element} key={index+element} removeTag={() => this.removeTag(index)}/> })}
                </div>

                <div className="list-note__notes">
                    {this.state.notes.map((element, index) =>
                        <Note
                            key={index + element}
                            note={element}
                            noteIndex={index}
                            noteForEdit={this.state.noteForEdit}
                            removeNote={() => this.removeNote(index)}
                            viewNote={() => this.viewNote(index)}
                            editNote={() => this.editNote(index)}
                            saveChangesToNote={this.saveChangesToNote}
                            changeNote={() => this.changeNote(index)}
                            tags={this.state.tags}
                        />
                    )}
                </div>    
            </div>
        )
    }
}

export default MainPage;
