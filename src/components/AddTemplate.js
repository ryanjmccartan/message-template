import React, {Component} from 'react';
import templates from '../data/templates.json';
import axios from 'axios';

class AddTemplate extends Component{

    state = {
        templates: [],
        new_message: {
            id: templates.length + 1,
            name: '',
            message: ''
        }
    }



    // componentDidMount() {
    //     this.getTemplates();
    // }

    // getTemplates = () => {
    //     templates.forEach(template => {
    //         this.setState({
    //             templates: [...this.state.templates, template]
    //         })
    //     })
    // }

    handleNewTemplate = (e, input) => {
        this.setState({
            new_message: {
                [input]: e.target.value
            }
        })
    }

    addTemplate = () => {
        axios.post('/templates', this.state.new_message)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
        // this.setState({
        //     new_message: {
        //         id: templates.length,
        //         name: '',
        //         message: ''
        //     }
        // })
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
                <button onClick={this.addTemplate}>Add template</button>
                <button onClick={this.checkData}>Check data</button>
            </div>
        )
    }
}

export default AddTemplate;