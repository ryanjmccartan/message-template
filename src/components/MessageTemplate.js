import React, {Component} from 'react';
import companies from '../data/companies.json';
import guests from '../data/guests.json';

class MessageTemplate extends Component {

    checkData = () => {
        console.log(companies);
        console.log(guests);
        guests.map(guest => {
            Object.keys(guest.reservation).map(key => {
                console.log(guest.reservation[key])
            })
            // console.log(guest.reservation)
            // console.log('looking for res object', Object.entries(guest.reservation))
            // guest.Object.keys('reservations').map(reservation => {
            //     console.log(reservation.startTimestamp);
            })
                // console.log(time.startTimestamp);
        // })
    }

    render() {
        
        return(
            <>
            <p>This is message template</p>
         
            <button onClick={this.checkData}>Check data</button>
            </>
        )
    }
}

export default MessageTemplate;