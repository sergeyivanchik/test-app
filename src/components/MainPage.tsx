import * as React from "react";

import Note from './Note/Note';
import Tag from './Tag/Tag'
import './MainPage.scss';

interface Props {}
interface State {
    noteText: String,
    arrDiv: Array<any>,
    arrTag: Array<any>
}

class MainPage extends React.Component<Props, State> {
    state: State = { noteText: '', arrDiv: [], arrTag: [] }

    handlerInputChange = event => 
        this.setState({noteText: event.target.value})

    addDiv =  event => {
        const arrayDiv: Array<String> = this.state.arrDiv;

        if(this.state.noteText) {
            arrayDiv.push(this.state.noteText);
            this.setState({arrDiv: arrayDiv});
            const arrayStr: Array<String> = this.state.noteText.split(' ');

            arrayStr.map(element => {
                let array : Array<String> = this.state.arrTag;
                if(element[0]==='#') {
                    array.push(element);
                    const set = new Set(array);
                    array = Array.from(set);
                    this.setState({arrTag: array})
                }
            })
        } else { alert("Empty data!!!"); }
    }

    remove = index => {
        const array: Array<String> = this.state.arrDiv;
        array.splice(index,1);
        this.setState({arrDiv: array})
    }

    change = index => {
        alert(this.state.arrDiv[index])
    }

    view = index => {
        alert(this.state.arrDiv[index])
    }

    render() {
        return (
            <div className="list-note">
                <input type="text" onChange={this.handlerInputChange} className="list-note__text"/>

                <span className="list-note__button" onClick={this.addDiv}> Add note </span>

                <div className="list-note__tags">
                    {this.state.arrTag.map((element, index) => { return <Tag text={element} key={index+element}/> })}
                </div>

                <div className="list-note__notes">
                    {this.state.arrDiv.map((element, index) =>
                        <Note
                            key={index+element}
                            text={element}
                            noteIndex={index}
                            remove={() => this.remove(index)}
                            view={() => this.view(index)}
                            change={() => this.change(index)}
                        />
                    )}
                </div>    
            </div>
        )
    }
}

export default MainPage;
