import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const BookTicketForm = () => {
    const {showName} = useParams();
    const navigate = useNavigate()

    const [userName, setUserName] = useState("");
    const [bookingDate, setBookingDate] = useState("")
    const [bookingTime, setBookingTime] = useState("")
    const [bookingPlace, setBookingPlace] = useState("")
    const ticketPrice = 500

    const bookTicket = (e) => {
        e.preventDefault();

        const formData = {
            movieName: showName,
            userName,
            bookingDate,
            bookingTime,
            bookingPlace,
            ticketPrice,
          };
      
          // Store data in local storage
          localStorage.setItem('bookingDetails', JSON.stringify(formData));
      
          alert('Ticket booked successfully!');
          navigate('/')
    }

  return (
    <div className='book-ticket-form'>
        <h1>Ticket Booking Form</h1>
        <form onSubmit={bookTicket}>
            Movie Name:
            <input
                type="text"
                name="movieName"
                value={showName}
            />
            <br />
            User Name:
            <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <br />
            Booking Date:
            <input
                type="date"
                name="bookingDate"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
            />
            <br />
            Booking Time:
            <select
                name="bookingTime"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
            >
                <option value="09:00 AM">09:00 AM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
            </select>
            <br />
            Booking Places:
            <input
                type="radio"
                name="bookingPlace"
                value="Cinema A"
                checked={bookingPlace === 'Cinema A'}
                onChange={(e) => setBookingPlace(e.target.value)}
                required
              />
              Cinema A
              <input
                type="radio"
                name="bookingPlace"
                value="Cinema B"
                checked={bookingPlace === 'Cinema B'}
                onChange={(e) => setBookingPlace(e.target.value)}
                required
              />
              Cinema B
              <input
                type="radio"
                name="bookingPlace"
                value="Cinema C"
                checked={bookingPlace === 'Cinema C'}
                onChange={(e) => setBookingPlace(e.target.value)}
                required
              />
              Cinema C
              <br />
              Price: 
                <input
                    type="numeric"
                    name="price"
                    value={ticketPrice}
                />
                <br />
                <div className='form-group'>
                    <button type='submit'>Book Now</button>
                </div>
            </form>
    </div>
  )
}

export default BookTicketForm