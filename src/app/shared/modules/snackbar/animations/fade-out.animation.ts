import {animate, style, transition, trigger} from "@angular/animations";

export const fadeOutAnimation = trigger('fadeOut', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate(850, style({ opacity: 0 }))
  ])
]);
