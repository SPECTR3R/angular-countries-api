import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/countries.interface';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialTerm: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialTerm = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.countriesService.searchByCountry(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
