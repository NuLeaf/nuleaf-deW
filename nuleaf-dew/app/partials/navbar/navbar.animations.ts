import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const animations: AnimationTriggerMetadata[] = [
  trigger('slideInOut', [
    transition(':enter', [
      style({
        height: 0,
        lineHeight: 0,
        padding: 0
      }),
      animate('150ms ease-in', style({
        height: '*',
        lineHeight: 0,
        padding: '*'
      }))
    ]),
    transition(':leave', [
      style({
        height: '*',
        lineHeight: 0,
        opacity: 1,
        padding: '*'
      }),
      animate('150ms ease-out', style({
        height: 0,
        lineHeight: 0,
        opacity: 0,
        padding: 0
      }))
    ]),
  ]),

  trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate('100ms 100ms ease-in', style({opacity: 1}))
    ])
  ])
];