import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = 'theme-dark';
  changeTheme(event: MatSlideToggleChange ){
    if (event.checked) {
      this.theme = 'theme-light';
    } else {
      this.theme = 'theme-dark';
    }
  }
}
