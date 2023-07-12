import { ENV } from "../utils/constans";

export class Blogs {
  async getBlog(id) {
    try {
      const filters = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BLOGS}/${id}?${filters}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBlogs() {
    try {
      const filters = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BLOGS}/?${filters}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
