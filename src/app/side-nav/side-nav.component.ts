import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  wide: boolean;
  constructor() {
    this.wide = true;
  }

  ngOnInit() {
  }

}
