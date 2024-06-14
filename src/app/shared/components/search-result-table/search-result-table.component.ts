import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';

@Component({
  selector: 'shared-search-result-table',
  templateUrl: './search-result-table.component.html',
})
export class SearchResultTableComponent {
  @Input() countries: Country[] = [];
}
