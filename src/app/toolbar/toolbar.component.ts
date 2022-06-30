import { Component } from '@angular/core'

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  isOpen: boolean = false;

    onButtonClick(): void {
      
        if(this.isOpen){
          this.isOpen = false;
        } else {
          this.isOpen = true;
        }
        console.log('isOpen', this.isOpen)
    }
}