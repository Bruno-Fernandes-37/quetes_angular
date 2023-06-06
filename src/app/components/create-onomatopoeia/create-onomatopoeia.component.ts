import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnomatopoeiaForm } from '../../models/Onomatopoeia';

@Component({
  selector: 'app-create-onomatopoeia',
  templateUrl: './create-onomatopoeia.component.html',
  styleUrls: ['./create-onomatopoeia.component.css']
})
export class CreateOnomatopoeiaComponent {

  newOnomatopoeia: string = new OnomatopoeiaForm("").onomatopoeia;
  error: boolean = false;

  @Input() onomatopoeiaList?: string[]

  @Output() sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopoeia(): void {
    const newOnomatopoeia = this.newOnomatopoeia.toLowerCase()

    if(!this.onomatopoeiaList?.includes(newOnomatopoeia)) {
      this.sendOnomatopoeiaToParent.emit(newOnomatopoeia)
      this.error = false;
    } else {
      this.error = true;
    }
  }

}
