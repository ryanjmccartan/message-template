import React, {Component} from 'react';
import companies from '../data/companies.json';
import guests from '../data/guests.json';
import templates from '../data/templates.json';
import AddTemplate from './AddTemplate'


class MessageTemplate extends Component {

    constructor(props){
    super(props)
    this.greeting = this.changeGreeting();
    this.state = {
        template: {
            id: 1
        },
        company: {
            id: 1
        },
        guest: {
            id: 1
        }
    }
}

    // getTemplates = () => {
    //     templates.map(template => {
    //         this.setState({
    //             greeting: template.greeting,
    //             message: template.message
    //         })
    //     }) 
    //     console.log(this.state.template)
    // }

    checkData = () => {
        console.log(companies);
        console.log(guests);
        guests.map(guest => {
            Object.keys(guest.reservation).map(key => {
                console.log('key:', key, 'value:', guest.reservation[key])
            })
        })
        console.log('state id', this.state.guest.id);
        console.log('company id', this.state.company.id)
        console.log('new message id', this.state.new_message.id)
    }

    changePerson = (e) => {
        this.setState({
            guest: {
                id: e.target.value
            }
        })
    }
    
    changeCompany = (e) => {
        this.setState({
            company: {
                id: e.target.value
            }
        })
    }

    changeTemplate = (e) => {
        this.setState({
            template: {
                id: e.target.value
            }
        })
    }

    sendMessage = () => {
        alert('Message sent!')
    }

    changeGreeting = () => {
        let greeting;
        const time = new Date().getHours();
        if(time < 12){
            greeting = "Good morning"
        }else if(time < 16){
            greeting = "Good afternoon"
        }else{
            greeting = "Good evening"
    }
        return greeting;
    }

    render() {

        let firstName;
        let roomNumber;
        let hotel; 
        let message;
        
        guests.map(guest => {
            if(guest.id == this.state.guest.id){
                firstName = guest.firstName;
                roomNumber = guest.reservation.roomNumber;
            }
            return;
        })

        companies.map(company => {
            if(company.id == this.state.company.id){
                hotel = company.company
            }
            return;
        })

        templates.map(template => {
           if(template.id == this.state.template.id){
                message = template.message;
                message = message
                .replace(/#greeting/, this.greeting)
                .replace(/#firstName/, firstName)
                .replace(/#company/, hotel)
                .replace(/#roomNumber/, roomNumber)
               }
            return message;
           }
        )
        
        return(
            <div>
                <p>Guest</p>
                <select value={this.state.guest.id} onChange={this.changePerson}>{guests.map(guest => {
                    return <option key={guest.id} value={guest.id}>{guest.firstName}</option>
                })}
                </select>
                <p>Company</p>
                <select value={this.state.company.id} onChange={this.changeCompany}>{companies.map(company => {
                    return <option key={company.id} value={company.id}>{company.company}</option>
                })}
                </select>
                <p>Template</p>
                <select value={this.state.template.id} onChange={this.changeTemplate}>{templates.map(template => {
                    return <option key={template.id} value={template.id}>{template.name}</option>
                })}
                    </select>
                {/* <button onClick={this.checkData}>Check data</button> */}
                <h3>Create template:</h3>
                <AddTemplate/>
                <h3>Message to send:</h3>
                <p>{message}</p>
            </div>
        )
    }
}

export default MessageTemplate;