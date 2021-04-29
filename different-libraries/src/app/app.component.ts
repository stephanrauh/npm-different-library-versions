import { Component, OnInit } from '@angular/core';
import printDeepThoughts from 'beyondjava-example-base-library';
import { useDeepThoughts } from 'beyondjava-example-first-library';
import { useAndReturnDeepThoughts } from 'beyondjava-example-second-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public version1: number; // 42
  public version2: number; // 21
  public version3: number; // 84

  ngOnInit() {
    console.log("This text is printed from the base library 1.0.0 which has been imported directly:")
    this.version1 = printDeepThoughts();
    console.log("This text is printed from the base library 2.0.0 which has been imported indirectly:")
    this.version2 = useDeepThoughts();
    console.log("This text is printed from the base library 3.0.0 which has been imported indirectly by another library:")
    this.version3 = useAndReturnDeepThoughts();
  }
}
