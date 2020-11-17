import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  array = [
    '/assets/1366x768 (1).jpg',
    '/assets/1366x768 (2).jpg',
    '/assets/1366x768 (3).jpg',
    '/assets/1366x768.jpg',
  ];
  effect = 'scrollx';

  constructor() {}

  ngOnInit(): void {}
}
