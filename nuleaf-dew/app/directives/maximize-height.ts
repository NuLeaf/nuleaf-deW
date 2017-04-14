import { Directive,
         Renderer2,
         ElementRef,
         HostListener,
         AfterViewInit } from '@angular/core';


@Directive({
  selector: '[nlMaximizeHeight]'
})
export class MaximizeHeightDirective implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'navbar-offset');
  }

  ngAfterViewInit() {
    this.maximizeHeight(window.innerHeight);
  }

  @HostListener('window:resize', ['$event.target.innerHeight'])
  onResize(innerHeight: number) {
    this.maximizeHeight(innerHeight);
  }

  maximizeHeight(vh: number) {
    let className = 'slide-wrapper';
    this.renderer.removeClass(this.el.nativeElement, className);

    let clientHeight = this.el.nativeElement.clientHeight;
    if (vh > clientHeight)
      this.renderer.addClass(this.el.nativeElement, className);
  }
}