import { Component } from '@angular/core';
import { onomatopoeiaTest } from '../models/mocks/mock-onomatopoeia';


@Component({
  selector: 'app-onomatopoeia',
  templateUrl: './onomatopoeia.component.html',
  styleUrls: ['./onomatopoeia.component.css']
})
export class OnomatopoeiaComponent {

  onomatopoeiaList: string[] = onomatopoeiaTest;

  onReceiveNewOnomatopoeia(newOnomatopoeia: string):void {
      this.onomatopoeiaList.push(newOnomatopoeia);
  }
}
