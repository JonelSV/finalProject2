import axios from 'axios'

const GAPI_BASE_URL= "http://localhost:8081/api";

class GuestService{

    getGuest(){
       return axios.get(GAPI_BASE_URL + "/allguests");
    }

    createGuest(guest){
        return axios.post(GAPI_BASE_URL + "/addguest",guest);
    }

    getGuestById(id){
        return axios.get(GAPI_BASE_URL + "/guest/"+id);
    }

    updateGuest(guest,id){
        return axios.put(GAPI_BASE_URL + "/guest/"+id,guest);
    }

    deleteGuest(id){
        return axios.delete(GAPI_BASE_URL +"/guest/"+id);
    }

}

export default new GuestService();