import axios from "axios";

      const baseURL = 'http://apijson.backgroundcheckapi.com/';
                  
            export const getDataApi = async(location) => {
                    try{
                      const {data} = await axios.get(baseURL + `l=${location}`);
                      return data;
                    }catch (error) {
                      throw error;
                    }
                  }
               