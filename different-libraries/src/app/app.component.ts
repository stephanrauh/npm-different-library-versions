import { Component } from '@angular/core';
import printDeepThoughts from 'beyondjava-example-base-library/index';
import { useDeepThoughts } from 'beyondjava-example-first-library/index';
import { useAndReturnDeepThoughts } from 'beyondjava-example-second-library/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public version1: number;
  public version2: number;
  public version3: number;

  ngOnInit() {
    console.log("This text is printed from the base library 1.0.0 which has been imported directly:")
    this.version1 = printDeepThoughts();
    console.log("This text is printed from the base library 2.0.0 which has been imported indirectly:")
    this.version2 = useDeepThoughts();
    console.log("This text is printed from the base library 3.0.0 which has been imported indirectly by another library:")
    this.version3 = useAndReturnDeepThoughts();
  }
}
