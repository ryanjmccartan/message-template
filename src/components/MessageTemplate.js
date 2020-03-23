import React, {Component} from 'react';
import companies from '../data/companies.json';
import guests from '../data/guests.json';
import templates from '../data/templates.json';

class MessageTemplate extends Component {

    state = {
        template: {
            id: 1
        },
        id: 1
    }


    getTemplate = () => {
        templates.map(template => {
            this.setState({
                greeting: template.greeting,
                message: template.message
            })
        }) 
        console.log(this.state.template)
    }

    checkData = () => {

        console.log(companies);
        console.log(guests);
        guests.map(guest => {
            Object.keys(guest.reservation).map(key => {
                console.log('key:', key, 'value:', guest.reservation[key])
            })
            // console.log(guest.reservation)
            // console.log('looking for res object', Object.entries(guest.reservation))
            // guest.Object.keys('reservations').map(reservation => {
            //     console.log(reservation.startTimestamp);
            })
                // console.log(time.startTimestamp);
        // })
        console.log('state id', this.state.id);
        console.log('template id', this.state.template)
    }

    changePerson = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    changeTemplate = (e) => {
        this.setState({
            template: {
                id: e.target.value
            }
        })
    }

    render() {

        let firstName;
        let roomNumber;
        let company = this.state.company; 
        let message;
        
            guests.map(guest => {
                if(guest.id == this.state.id){
                firstName = guest.firstName;
                roomNumber = guest.reservation.roomNumber;
                return;
                }
        })

       templates.map(template => {
           if(template.id == this.state.template.id){
                message = template.message;
                template.message.replace(/firstName/, firstName)
               }
            return message;
           }
       )
        // let roomNumber = guests.map(guest => {
        //     Object.keys(guest.reservation).map(key => {
        //         console.log(guest.reservation[key])
        //         // return key.roomNumber;
        //     })
        //   }
        // )
        
        return(
            <>
            <select value={this.state.id} onChange={this.changePerson}>{guests.map(guest => {
                return <option key={guest.id} value={guest.id}>{guest.firstName}</option>
            })}
            </select>
             <select value={this.state.template.id} onChange={this.changeTemplate}>{templates.map(template => {
                return <option key={template.id} value={template.id}>{template.name}</option>
            })}
                </select>
            <p>This is message template</p>
            <button onClick={this.checkData}>Check data</button>
            <button onClick={this.getTemplate}>Get template</button>
            {/* {guests.map(guest => {
                if(guest.id == this.state.id){
                    return `Good morning ${guest.firstName}, and welcome to Hotel California. Room ${guest.reservation.roomNumber}`
                }
            })} */}
            <h1>{firstName}</h1>
            <h1>{roomNumber}</h1>
            <p>{message}</p>
            </>
        )
    }
}

export default MessageTemplate;