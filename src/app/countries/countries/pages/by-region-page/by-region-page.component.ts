import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/countries.interface';
import { Region } from 'src/app/countries/interfaces/region.type';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {
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

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
