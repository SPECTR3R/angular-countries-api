import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  emitSearch(searchInput: string) {
    this.onSearch.emit(searchInput);
  }
  @Input() placeholder: string = 'Search...';

  @Output() onSearch = new EventEmitter<string>();
}
