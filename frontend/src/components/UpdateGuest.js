import React, { Component } from 'react';
import GuestService from './services/GuestService';

class UpdateGuest extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 lastName:'',
                 ticket:''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.ticketHandler = this.ticketHandler.bind(this);
        this.updateGuest = this.updateGuest.bind(this);

    }

     componentDidMount()
     {
        GuestService.getGuestById(this.state.id).then((res) =>{
          let guest = res.data;
          this.setState({name:guest.name,
                  ticket:guest.ticket
                });
        });
           
     }
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }
    lastNameHandler=(event) => {
        this.setState({
           lastName: event.target.value});
    }

   ticketHandler=(event) => {
        this.setState({
             ticket: event.target.value});
    }

   updateGuest = (e) => {
        e.preventDefault();
        let guest={
           id: this.state.id,
           name: this.state.name,
           lastName: this.state.lastName,
           ticket: this.state.ticket
        };
        
        GuestService.updateGuest(guest,this.state.id).then((res) => {
                this.props.history.push('/guests');
        });
      
        
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
                          <h3 className="text-center">Update Guest Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Guest ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest LastName: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.lastName} onChange={this.lastNameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Guest Ticket: </label>
                                      <input placeholder="Ticket" name="ticket" className="form-control"
                                         value={this.state.ticket} onChange={this.ticketHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.updateGuest}> Update </button>
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

export default UpdateGuest;