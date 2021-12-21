import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // properties

  doDisplayParagraph = false;
  buttonPressLog = [];
  htmlToAdd = '<div class="two">two</div>';
  @ViewChild('div') div: ElementRef;

  // methods

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  
  logHandler(){

    var count = this.buttonPressLog.length + 1;
    var logMessage = '';

    // get the display message rolling 
    logMessage = 'The button was pressed for the ' + this.ordinal(count) + ' time';
    // works with v1...logMessage = (count > 4)?('<div style="color:red;">' + logMessage + '!</div>'):logMessage + '.';

    // write to the array
    this.buttonPressLog.push(logMessage);
    /*
    this was my original solution for logging...
    // append the text
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = logMessage;
    this.renderer.appendChild(this.div.nativeElement, p);
    */

  }

  onDisplayToggle(event: any){
    // how many times was the button clicked?
    var count = this.buttonPressLog.length + 1;
    // toggle the boolean value
    this.doDisplayParagraph = !this.doDisplayParagraph;
    // log it!
    this.logHandler();
  }

  ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n%100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
  }  
}