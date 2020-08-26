import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CommonLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
