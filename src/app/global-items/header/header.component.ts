import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHamburgerMenuOpen = false;
  isMobileView = false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width < 1025) {
      this.isMobileView = true;
    }
  }

  toggleHamburgerMenu() {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }
}
