import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTableComponent } from './search-result-table.component';

describe('SearchResultTableComponent', () => {
  let component: SearchResultTableComponent;
  let fixture: ComponentFixture<SearchResultTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultTableComponent]
    });
    fixture = TestBed.createComponent(SearchResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
