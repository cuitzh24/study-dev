import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  // 模板显示值不能用private修饰
  clickMessage: string;

  // tslint:disable-next-line: variable-name
  activity2_1_1Value = '';
  // tslint:disable-next-line: variable-name
  activity2_1_2Value = '';
  // tslint:disable-next-line: variable-name
  activity2_2Value: string;

  activity3Value: string;

  activity4Value: string;

  constructor() {}

  ngOnInit(): void {}

  /**
   * 实例1 生成message
   */
  // tslint:disable-next-line: typedef
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  /**
   * 实例1 清除message
   */
  // tslint:disable-next-line: typedef
  clear() {
    if (this.clickMessage) {
      this.clickMessage = '';
    } else {
      this.clickMessage = 'message already blank!';
    }
  }

  /**
   * 实例2.1 绑定$event
   * event可为any类型也可为指定类型
   * 类型化事件对象揭露了重要的一点，即反对把整个 DOM 事件传到方法中，因为这样组件会知道太多模板的信息。
   * 只有当它知道更多它本不应了解的 HTML 实现细节时，它才能提取信息。 这就违反了模板（用户看到的）和组件（应用如何处理用户数据）之间的分离关注原则
   */
  // tslint:disable-next-line: typedef
  onKey(event: KeyboardEvent) {
    // $event 对象的属性取决于 DOM 事件的类型。例如，鼠标事件与输入框编辑事件包含了不同的信息,所有标准 DOM 事件对象都有一个 target 属性
    this.activity2_1_1Value += (event.target as HTMLInputElement).value + ' | ';
    // event.key 替代 event.target.value,积累每个按键本身
    this.activity2_1_2Value += event.key + ' | ';
  }

  /**
   * 实例2.2，通过#获取输入框value，，比2.1更安全
   */
  // tslint:disable-next-line: typedef
  keyUp(value: string) {
    this.activity2_2Value = value;
  }

  /**
   * 实例3 获取点击回车事件
   */
  // tslint:disable-next-line: typedef
  onEnter(value: string) {
    this.activity3Value = value;
  }

  /**
   * 实例4 获取blur事件
   */
  // tslint:disable-next-line: typedef
  update(value: string) {
    this.activity4Value = value;
  }
}
