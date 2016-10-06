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
        overflow: 'hidden',
        opacity: 0,
      }),
      animate('150ms ease-out', style({
        height: '*',
        opacity: 1
      }))
    ]),
  ]),
  trigger('fadeSlideOut', [
    transition('* => void', [
      style({
        height: '*',
        overflow: 'hidden',
      }),
      animate('150ms ease-in', style({
        height: 0,
        opacity: 0
      }))
    ])
  ]),
  trigger('fadeSlideInSlow', [
    transition('void => *', [
      style({
        height: 0,
        opacity: 0
      }),
      animate('300ms ease-in-out', style({
        height: '*',
        opacity: 1
      }))
    ])
  ])
]