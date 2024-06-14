import { Component } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];

  searchByRegion(term: string) {
    this.countriesService.searchByRegion(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
