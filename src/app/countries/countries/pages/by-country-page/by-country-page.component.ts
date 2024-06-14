import { Component } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css'],
})
export class ByCountryPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchByCountry(term: string) {
    this.countriesService.searchByCountry(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
