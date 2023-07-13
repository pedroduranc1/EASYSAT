import { authFetch } from "../utils/authFetch";
import { ENV } from "../utils/constans";

export class Cursos {
  async getCursos() {
    try {
      //const filters = `filters[user][id][$eq]=${userId}`;
      //const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CURSOS}?${filters}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CURSOS}?populate=*`;


      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
