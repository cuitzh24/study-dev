import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActivity2]',
})
export class Activity2Directive {
  // HostListener监听模板属性所触发的事件
  @HostListener('mouseenter') onMouseEnter() {
    this.activity2('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.activity2(null);
  }

  constructor(private el: ElementRef) {}

  /**
   * 实例2 获取事件动态修改
   */
  // tslint:disable-next-line: typedef
  private activity2(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
