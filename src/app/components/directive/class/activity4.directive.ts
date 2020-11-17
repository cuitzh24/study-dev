import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appActivity4]',
})
export class Activity4Directive {
  /**
   * 默认颜色
   */
  @Input() defaultColor: string;

  @Input('appActivity4') highlightColor: string;

  constructor(private el: ElementRef) {}

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  // tslint:disable-next-line: typedef
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
}
