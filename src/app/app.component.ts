import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Custom Directive!';
  public location;
  bindAddress(place: Object) {
    this.location = place['formatted_address'];
  }
}
