import React from 'react'
import Hud from '../assets/Hud.mp4'
import Oleg from '../assets/OlegBelokonev.jpg'
import Alexander from '../assets/Alexander.jfif'
import MB from '../assets/MariaButina.jfif'

const Priority = () => {
    return (
      <div>
         <section>
          <video autoPlay loop muted
            style={{
                position: 'absolute',
                width: '160%',
                height: '200%',
                objectFit: 'cover',
                transform: 'translate(-40%, -40%)',
                zIndex: '-1'
            }}>
            <source src={Hud} type='video/mp4' />
          </video>
         </section> 
         
         
        <section className='stories'>           
          <div className='stories-wrapper'>
            <div className='story-bg'>
              <div className='story'>
                <img
                  src={Oleg}
                  alt='Oleg'
                  className='story-image'
                />
                <div className='story-text'>
                  <h1 className='story-heading'> Цель номер один</h1>
                  <p className='story-paragraph'>
                  Major General 
                  Oleg Belokonev
                    
                  </p>
                </div>
              </div>
            </div>
            <div className='story-bg'>
              <div className='story'>
                <img
                  src={Alexander}
                  alt=''
                  className='story-image'
                />
                <div className='story-text'>
                  <h1 className='story-heading'>Цель номер два</h1>
                  <p className='story-paragraph'>
                  Alexander Yuyevich Korshunov             
                  </p>
                </div>
              </div>
            </div>
            <div className='story-bg'>
              <div className='story'>
                <img
                  src={MB}
                  alt='Oleg'
                  className='story-image'
                />
                <div className='story-text'>
                  <h1 className='story-heading'> цель номер три</h1>
                  <p className='story-paragraph'>
                  Maria Butina                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <video autoPlay loop muted
            style={{
                position: 'absolute',
                width: '160%',
                height: '600%',
                objectFit: 'cover',
                transform: 'translate(-40%, -20%)',
                zIndex: '-1'
            }}>
            <source src={Hud} type='video/mp4' />
          </video>
         </section> 
      </div>
    );
}

export default Priority;
