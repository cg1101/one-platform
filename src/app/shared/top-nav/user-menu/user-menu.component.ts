import {Component, OnInit, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'op-user-menu',
  templateUrl: 'user-menu.component.html',
  styleUrls: ['user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  private open = false;

  @HostBinding('class.dropdown') true;

  @HostBinding('class.open') isDropdownOpen() {
    return this.open;
  }

  @HostListener('mouseenter') openDropdown() {
    this.open = true;
  }

  @HostListener('mouseleave') closeDropdown() {
    this.open = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
