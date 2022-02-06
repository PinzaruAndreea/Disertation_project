import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() isHamburgerMenuOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 1025) {
      this.isHamburgerMenuOpen = true;
    }
  }

}
