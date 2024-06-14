import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input() placeholder: string = 'Search...';

  @Output() onDebounce = new EventEmitter<string>();

  onKeyPress(searchInput: string) {
    this.debouncer.next(searchInput);
  }

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((searchInput) => {
        this.onDebounce.emit(searchInput);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
