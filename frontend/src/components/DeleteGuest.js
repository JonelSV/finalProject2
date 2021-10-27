import React, { Component } from 'react';
import GuestService from './services/GuestService';

class DeleteGuest extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 lastName:'',
                 ticket:''
             }
     
        
        this.deleteGuest = this.deleteGuest.bind(this);

    }//constructor

     componentDidMount()
     {
        GuestService.getGuestById(this.state.id).then((res) =>{
          let guest = res.data;
          this.setState({name:guest.name,
                lastName:guest.lastName,
                  ticket:guest.ticket,
                });
        });
           
     }
     
    

    
  deleteGuest = (e) => {
        e.preventDefault();
        let guest={
           id: this.state.id,
           name: this.state.name,
           lastName: this.state.lastName,
           ticket: this.state.ticket
        };

        console.log(guest);
        GuestService.deleteGuest(this.state.id).then(res => {
            
            this.props.history.push('/guests');
        })
      
        
    }

    cancel(){
        this.props.history.push('/guests');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Guest</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Guest ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest LastName: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.lastName} onChange={this.lastNameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Ticket: </label>
                                      <input placeholder="Ticket" readOnly="true" name="ticket" className="form-control"
                                         value={this.state.ticket} onChange={this.ticketHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteGuest}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteGuest;