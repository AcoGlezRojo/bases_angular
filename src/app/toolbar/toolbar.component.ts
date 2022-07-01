import { Component } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  isMenuOpen: boolean = false;
  isProfileOpen: boolean = false;

  onMenuButton(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }

  onProfileButton(): void {
    if (this.isProfileOpen) {
      this.isProfileOpen = false;
    } else {
      this.isProfileOpen = true;
    }
  }
}