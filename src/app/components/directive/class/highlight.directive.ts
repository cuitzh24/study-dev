import { Directive, ElementRef } from '@angular/core';
// @Directive 装饰器
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // 可以在指令的构造函数中使用 ElementRef 来注入宿主 DOM 元素的引用，也就是你放置 标签 的那个元素。
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
