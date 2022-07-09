import {animate, style, transition, trigger} from "@angular/animations";

export const fadeInAnimation = (duration: number, delay: number = 0) => {
  return trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${duration}ms ${delay}ms`, style({ opacity: 1 }))
    ])
  ]);
}
