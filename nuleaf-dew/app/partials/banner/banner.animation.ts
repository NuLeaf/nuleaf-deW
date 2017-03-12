import { trigger,
         state,
         style,
         transition,
         animate }   from '@angular/core';


export let animations = [
  trigger('fadeSlideIn', [
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
      }),
      animate('300ms ease-out', style({
        height: '*',
        opacity: '*'
      }))
    ])
  ])
]