

import axios from 'axios';

const PETFOOD_API_BASE_URL = 'http://localhost:8080/petFoods';

class petFoodService {

   fetchPetFood() {
       return axios.get(PETFOOD_API_BASE_URL);
   }

   deletePetFood(petFoodId) {
    return axios.delete(PETFOOD_API_BASE_URL + '/' + petFoodId);
  }

  createPetFoods(food){
    return axios.post(""+PETFOOD_API_BASE_URL, food)
  }



  }
export default new petFoodService();
