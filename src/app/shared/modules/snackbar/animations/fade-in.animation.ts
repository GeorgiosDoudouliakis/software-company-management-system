import {animate, style, transition, trigger} from "@angular/animations";

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(850, style({ opacity: 1 }))
  ])
]);
