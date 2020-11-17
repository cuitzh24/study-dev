import { Component, OnInit } from '@angular/core';

type explain = {
  name: string;
  explain: string;
};

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  constructor() {}

  birthday = new Date();

  explain: explain[] = [
    { name: 'DatePipe', explain: '根据本地环境中的规则格式化日期值' },
    { name: 'UpperCasePipe', explain: '把文本全部转换成大写' },
    { name: 'LowerCasePipe', explain: '把文本全部转换成小写' },
    { name: 'CurrencyPipe', explain: '把数字转换成货币字符串,根据本地环境中的规则进行格式化' },
    { name: 'DecimalPipe', explain: '把数字转换成带小数点的字符串,根据本地环境中的规则进行格式化' },
    { name: 'PercentPipe', explain: '把数字转换成百分比字符串,根据本地环境中的规则进行格式化' },
  ];

  ngOnInit(): void {}
}
