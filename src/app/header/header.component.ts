import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() out = new EventEmitter<string>();

  onSelect(feature: string) {
    this.out.emit(feature);
  }

}
