import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ShowList = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.tvmaze.com/search/shows?q=all')

                setShows(res.data);

            } catch (error) {
                console.log("Error in fetching Data : ", error);
            }
        }

        fetchData();
        // eslint-disable-next-line
    }, [])

  return (
    <>
      <h1>Shows List</h1>
      <div className='shows-lists'>
        {
            shows.map((show) => {
                return(
                    <div className="shows-list" key={show.show.id}>
                        {show.show.image?.original ? (
                            <img src={show.show.image.original} alt={show.show.name} />
                            ) : (
                            <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png" alt="Image Not Available" />
                        )}
                        <p>{show.show.name}</p>
                        <Link to={`/show/${show.show.id}`} style={{textDecoration: 'none'}}>
                            <button>Show Details</button>
                        </Link>
                    </div>
                )
            })
        }
      </div>
      
    </>
  )
}

export default ShowList