import React, {Component} from 'react';
import templates from '../data/templates.json';

class AddTemplate extends Component{

    state = {
        templates: [],
        new_message: {
            id: templates.length + 1,
            name: '',
            message: ''
        }
    }

    handleNewTemplate = (e, input) => {
        this.setState({
            new_message: {
                [input]: e.target.value
            }
        })
    }


    checkData = () => {
        console.log('new message', this.state.new_message)
        console.log('templates', this.state.templates)
    }
    
    render() {

        return(
            <div>
                <input onChange={(e) => this.handleNewTemplate(e, 'name')} placeholder="template name"/>
                <input onChange={(e) => this.handleNewTemplate(e, 'message')} placeholder="message"/>
                {/* <button onClick={this.addTemplate}>Add template</button> */}
                <button onClick={this.checkData}>Check data</button>
            </div>
        )
    }
}

export default AddTemplate;