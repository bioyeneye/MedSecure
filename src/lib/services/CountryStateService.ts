class CountryStateService {
  private apiUrl: string;

  constructor() {
    this.apiUrl =
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json";
  }

  async fetchData(): Promise<Country[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // eslint-disable-next-line no-console
      console.log(data);
      return data as Country[];
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }
}

export default CountryStateService;

export interface Country {
  id: number;
  name: string;
  numeric_code: string;
  ios3: string;
}

export interface State {
  id: number;
  name: string;
  country_id: number;
}
