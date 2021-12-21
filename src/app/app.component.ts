import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { $ } from 'protractor';

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

  onDisplayToggle(event: any){
    // console.log('onDisplayToggle()');
    this.doDisplayParagraph = !this.doDisplayParagraph;
    // console.log(' - this.doDisplayParagraph ' + this.doDisplayParagraph);
    this.logHandler();
    
  }

  logHandler(){
    var count = this.buttonPressLog.length + 1;
    var logMessage = '';
    // logMessage = 'The button was pressed ' + count + ((count == 1)?' time':' times');
    logMessage = 'The button was pressed for the ' + this.ordinal(count) + ' time';
    logMessage = (count > 4)?('<div style="color:red;">' + logMessage + '!</div>'):logMessage + '.';
    console.log(logMessage);
    this.buttonPressLog.push(logMessage);
    // this.htmlToAdd = logMessage;

    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = logMessage;
    this.renderer.appendChild(this.div.nativeElement, p);

  }

  ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n%100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
  }  
}