import React from 'react'
import Contact from '../assets/Contact.mp4'
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
        </div>
    )
}

export default Contacts
