import React from 'react'
import Contact from '../assets/Contact.mp4'
import axios from 'axios'

const Contacts = () => {
    return (
      <div>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          architecto corrupti officia, eos praesentium, culpa non, blanditiis
          qui voluptatem suscipit reprehenderit temporibus eius repudiandae? Quo
          omnis non quisquam debitis eaque!
        </h4>
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
        <iframe
          src='https://www2.fbi.gov/widgets/widget_video.htm'
          width='600'
          height='480'
          frameborder='0'
        ></iframe>
        <div>
          <iframe
            src='https://www.dhs.gov/ntas/'
            name='National Terrorism Advisory System'
            title='National Terrorism Advisory System'
            width='270'
            height='280'
            scrolling='no'
            frameborder='0'
            seamless
            border='0'
          ></iframe>
        </div>
      </div>
    );
}

export default Contacts
