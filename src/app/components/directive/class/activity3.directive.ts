import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActivity3]',
})
export class Activity3Directive implements OnChanges {
  /**
   * 高亮属性
   */
  @Input() highlightColor: string;

  @Input('appActivity3') another: string;

  constructor(private el: ElementRef) {}

  /**
   * 为什么要实现Onchange方法？监听hightlight改变动态改变颜色
   */
  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
    if (this.another) {
      this.el.nativeElement.style.backgroundColor = this.another;
    }
  }
}
