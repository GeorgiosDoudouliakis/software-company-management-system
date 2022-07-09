import {animate, style, transition, trigger} from "@angular/animations";

export const fadeOutAnimation = (duration: number, delay: number = 0) => {
  return trigger('fadeOut', [
    transition(':leave', [
      style({opacity: 1}),
      animate(`${duration}ms ${delay}ms`, style({opacity: 0}))
    ])
  ]);
}
