import { Component, Input } from '@angular/core';

@Component({
  selector: 'dy-template1',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
