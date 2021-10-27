import React, { Component } from 'react';
import GuestService from './services/GuestService';

class ViewGuest extends Component {
    constructor(props)
    {
        super(props)
             this.state={
                 id: this.props.match.params.id,
                 guest:{
                     id: this.props.match.params.id,
                     
                 }
             }
        
    }

     componentDidMount()
     {
        GuestService.getGuestById(this.state.id).then((res) =>{
            console.log(res.data)
            this.setState({guest:res.data})
         });
     }
     
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Guest Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">

                                    <label>Guest ID: </label>
                                    <input placeholder={this.state.guest.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Name: </label>
                                      <input placeholder={this.state.guest.firstname} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest LastName: </label>
                                      <input placeholder={this.state.guest.lastname} readOnly={true} name="lastname" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Ticket: </label>
                                      <input placeholder={this.state.guest.ticket} readOnly={true} name="ticket" className="form-control" />
                                   </div> 
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewGuest;