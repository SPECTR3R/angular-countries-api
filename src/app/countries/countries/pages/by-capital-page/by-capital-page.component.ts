import { Component } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchByCapital(term: string) {
    this.countriesService.searchByCapital(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
