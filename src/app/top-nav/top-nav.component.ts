import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'op-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  providers: [ NgClass ]
})
export class TopNavComponent implements OnInit {

  private infoStub: {
    notification: boolean,
    bookmark: boolean,
    history: boolean,
  };

  constructor(private ngClass: NgClass) {
    this.infoStub = {
      notification: false,
      bookmark: false,
      history: false,
    };
  }

  ngOnInit() {
  }

  toggleInfo(key: string): void {
    let showInfo = false;
    if (this.infoStub[key]) {
      this.infoStub.notification = false;
      this.infoStub.bookmark = false;
      this.infoStub.history = false;
    } else {
      this.infoStub.notification = false;
      this.infoStub.bookmark = false;
      this.infoStub.history = false;
      this.infoStub[key] = true;
      showInfo = true;
    }
    this.ngClass.ngClass = showInfo ? 'info info-' + key : '';
    this.ngClass.ngDoCheck();
  }
}
