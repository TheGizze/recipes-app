import { fetcher } from '../utils/Fetcher';

export class RecipiesAPI implements RecipiesAPIInterface {
  getAllRecipies(host: string): Promise<Recipie> {
    return fetcher(host, '/');
  }

  getSingleRecipie(host: string, id: string): Promise<Recipie> {
    return fetcher(host, `/recipies/${id}`);
  }
}

export class Recipies implements RecipiesInterface {
  private host: string;
  private recipiesAPI: RecipiesAPIInterface;
  constructor(host: string, recipiesAPI: RecipiesAPIInterface) {
    this.host = host;
    this.recipiesAPI = recipiesAPI;
  }

  getAllRecipies(): Promise<Recipie> {
    return this.recipiesAPI.getAllRecipies(this.host);
  }
  getSingleRecipie(id: string): Promise<Recipie> {
    return this.recipiesAPI.getSingleRecipie(this.host, id);
  }
}

interface RecipiesInterface {
  getAllRecipies: () => Promise<Recipie>;
  getSingleRecipie: (id: string) => Promise<Recipie>;
}

interface RecipiesAPIInterface {
  getAllRecipies: (host: string) => Promise<Recipie>;
  getSingleRecipie: (host: string, id: string) => Promise<Recipie>;
}
