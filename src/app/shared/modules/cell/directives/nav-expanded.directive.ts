import { Directive, Input, HostListener } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';

@Directive({
  selector: '[nav-expanded]'
})
export class NavExpandedDirective {
  @Input('nav-expanded') isMenuExpanded: boolean = false;
  @Input() nav: NavigationComponent;

  constructor() { }

  @HostListener('click') onClick() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.nav.isExpanded = this.isMenuExpanded;
    this.nav.cdr.detectChanges();
  }
}
