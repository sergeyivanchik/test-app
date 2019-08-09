import * as React from "react";
import { Link } from 'react-router-dom';


interface Props {}
interface State {
    name: String,
    arrDiv: Array<any>
}

class TestPage extends React.Component<Props, State> {
    state: State = { name, arrDiv: [] }

    handlerInputChange = event => 
        this.setState({name: event.target.value})

    addDiv =  event => {
        const array = this.state.arrDiv;
        if(this.state.name) {
            array.push(this.state.name)
            this.setState({arrDiv: array})
        }
    }

    render() {
        return (
            <div className="authrorization">
                <form>
                    <input type="text" onChange={this.handlerInputChange} className="authrorization__login"/>
                    <Link to={`./${this.state.name}`} className="authrorization__button" onClick={this.addDiv}>
                        Log in
                    </Link>
                    {this.state.arrDiv.map((element, index) =>
                        <div>{element}</div>
                    )}
                </form>
            </div>
        )
    }
}

export default TestPage;
