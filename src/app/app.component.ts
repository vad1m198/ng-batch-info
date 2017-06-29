import { Component,ElementRef,Optional } from '@angular/core';
import { Config } from './util/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public elementRef: ElementRef,public config: Config) {
    config.sldsUrl = this.elementRef.nativeElement.getAttribute("sldsUrl");

  }

}
