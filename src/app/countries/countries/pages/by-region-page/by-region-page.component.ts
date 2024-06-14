import { Component } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { CountriesService } from 'src/app/countries/services/countries.service';
type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  selectedRegion?: Region;

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
