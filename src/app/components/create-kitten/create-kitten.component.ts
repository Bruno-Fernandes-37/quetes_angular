import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../../models/Kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  newKitten: Kitten = new Kitten("", "", new Date(), "");

  @Output() sendKittenToParent: EventEmitter<Kitten> = new EventEmitter();

  createKitten(): void {
    this.sendKittenToParent.emit(this.newKitten);
  }
}
