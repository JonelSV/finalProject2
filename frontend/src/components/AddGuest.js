import React, { Component } from 'react';
import GuestService from './services/GuestService';

class AddGuest extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           lastName: '',
           ticket:''
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.ticketHandler = this.ticketHandler.bind(this);

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

    saveGuest = (e) => {
        e.preventDefault();
        let guest={
           id: this.state.id,
           name: this.state.name,
           lastName: this.state.lastName,
           ticket: this.state.ticket
        };
        console.log(guest);
        GuestService.createGuest(guest).then(res =>{
                this.props.history.push('/guest');  
            }).catch(error=>{
                console.log("record not saved.");
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
                          <h3 className="text-center">Add Guest Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Guest ID: </label>
                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>First Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Last Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.lastName} onChange={this.lastNameHandler} />
                                   </div>   


                                   <div className="form-group">
                                      <label>Ticket: </label>
                                      <input placeholder="Ticket" name="ticket" className="form-control"
                                         value={this.state.ticket} onChange={this.ticketHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveGuest}> Save </button>
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

export default AddGuest;