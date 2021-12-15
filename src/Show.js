import React, { useState, useEffect } from 'react'
import './App.css';



function Show() {
    const [users, setUsers] = useState([]);

    const getShow = async () => {
        const response = await fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01');
        
        setUsers(await response.json());

    }
    useEffect(() => {
        getShow();
    }, []);
    return (
        <>
            <div className='main_div'>


                {
                    users.map((currShow) => {
                        return (
                            <>
                                <div className='show_container'>
                                    <div className='show'>

                                        <a href={currShow.url}>
                                            <img src={currShow.image} alt="" className='poster' />
                                        </a>


                                        <a href={currShow.url} className='show-name'>{currShow.name}</a>

                                        <div className='follow'>
                                            <i class="fa fa-heart-o" aria-hidden="true" title='Click to follow'></i>
                                        </div>
                                        <div className='vote'>
                                            <i class="fa fa-star-o" aria-hidden="true" title='Vote'></i>

                                        </div>



                                    </div>


                                </div>
                            </>
                        )


                    })
                }


            </div>

        </>
    )
}

export default Show;
