import React, { Component } from 'react';
import GuestService from './services/GuestService';
import Chain from './assets/Chain.mp4';


        

class ListGuests extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                guests:[] 
          }
          this.addGuest=this.addGuest.bind(this);
          this.editGuest=this.editGuest.bind(this);
          this.deleteGuest=this.deleteGuest.bind(this);
          this.viewGuest=this.viewGuest.bind(this);
      }
    
     componentDidMount() {
         GuestService.getGuest().then((res) => {
             this.setState({guests:res.data});
         });
     }
     
     addGuest()
     {
        
        this.props.history.push('/add-guest');
     }

     editGuest(id)
     {
        this.props.history.push(`/update-guest/${id}`);
        
     }

     deleteGuest(id)
     {
        this.props.history.push(`/delete-guest/${id}`);
        
        
     }

     viewGuest(id)
     {
        this.props.history.push(`/view-guest/${id}`);
        
     }

    render() {
        return (
          <div>
            <h2 className='text-center'>Guest List</h2>
            <div>
              <button className='btn btn-primary' onClick={this.addGuest}>
                {' '}
                Add Guest
              </button>
            </div>
            <div>
              <p></p>
            </div>
            <div className='row'>
              <table className='table table-striped table-bordered'>
                <thead>
                  <tr>
                    <th>Guest Id</th>
                    <th>Guest Name</th>
                    <th>Guest LastName</th>
                    <th>Guest Ticket</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.guests.map((guest) => (
                    <tr key={guest.id}>
                      <td>{guest.id}</td>
                      <td>{guest.name}</td>
                      <td>{guest.lastName}</td>
                      <td>{guest.ticket}</td>
                      <td>
                        <button
                          onClick={() => this.editGuest(guest.id)}
                          className='btn btn-primary'
                        >
                          Update
                        </button>
                        <button
                          onClick={() => this.deleteGuest(guest.id)}
                          className='btn btn-danger'
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => this.viewGuest(guest.id)}
                          className='btn btn-primary'
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                <source src={Chain} type='video/mp4' />
              </video>
            </section>
          </div>
        );
        
    }
    
}

export default ListGuests;