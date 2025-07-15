import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  standalone: false,
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css'
})
export class WishFilter {

  selectedFilter: string = 'all';

  @Output() filterChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterChange.emit(this.selectedFilter);
  }
  
  
}
