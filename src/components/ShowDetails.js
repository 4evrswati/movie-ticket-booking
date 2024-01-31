import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ShowDetails = () => {

    const {showId} = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://api.tvmaze.com/shows/${showId}`)
                setShow(res.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
        // eslint-disable-next-line
    }, [showId])

    const handleBooking = () => {
        navigate(`/book-ticket/${show.name}`)
    }

  return (
    <>
    {show ? (
      <section className='detail'>
        <h1> {show.name} </h1>
        <div className='show'>
            {show.image?.original ? (
                <img src={show.image.original} alt={show.name} />
                ) : (
                <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png" alt="Image Not Available" />
            )}
            <div className='show-info'>
                <p>
                    <span>Name :</span> {show.name} 
                </p>
                <p>
                    <span>Type :</span> {show.type} 
                </p>
                <p>
                    <span>Rating :</span>  {show.rating.average || 2}
                </p>
                <p>
                    <span>Summary :</span>  <p dangerouslySetInnerHTML={{ __html: show.summary }} /> 
                </p>
                <button onClick={handleBooking}>
                    Book Ticket 
                </button>
            </div>
        </div>
      </section>
    ) : (
      <div className='loading'>Loading...</div>
    )}
  </>
  )
}

export default ShowDetails