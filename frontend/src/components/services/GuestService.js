import axios from 'axios'

const GAPI_BASE_URL= "http://localhost:8081/api";

class GuestService{

    getGuest(){
       return axios.get(GAPI_BASE_URL + "/allguests");
    }

    createGuest(guest){
        return axios.post(GAPI_BASE_URL + "/addguest",guest);
    }
    viewGuest(id){
        return axios.get(GAPI_BASE_URL + "/view-guest"+id);
    }

    getGuestById(id){
        console.log(id, typeof id)
        return axios.get(GAPI_BASE_URL + "/guests/"+id);
    }

    updateGuest(guest,id){
        return axios.put(GAPI_BASE_URL + "/guest/"+id,guest);
    }

    deleteGuest(id){
        return axios.delete(GAPI_BASE_URL +"/guest/"+id);
    }

}

export default new GuestService();