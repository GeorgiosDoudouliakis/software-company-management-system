import {animate, style, transition, trigger} from "@angular/animations";

export const slideInTopAnimation = trigger("slideInTop", [
  transition(":enter",[
    style({
      opacity: 0,
      transform: 'translateY(-600px)'
    }),
    animate("650ms", style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ])
]);
