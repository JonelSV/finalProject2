import React from 'react'
import Contact from '../assets/Contact.mp4'
import axios from 'axios'

const Contacts = () => {
    return (
        <div>
           <section>
              <video
                autoPlay
                loop
                muted
                style={{
                  position: 'absolute',
                  width: '140%',
                  height: '190%',
                  objectFit: 'cover',
                  transform: 'translate(-25%, -40%)',
                  zIndex: '-1',
                }}
              >
                <source src={Contact} type='video/mp4' />
              </video>
            </section>

            <iframe src="https://www.dhs.gov/ntas/" name="National Terrorism Advisory System" 
            title="National Terrorism Advisory System" width="270" height="280" scrolling="no" 
            frameborder="0" seamless border="0"></iframe>

                

        </div>
    )
}

export default Contacts
