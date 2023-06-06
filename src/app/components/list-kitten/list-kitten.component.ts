import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../../models/Kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  kittenPass?: Kitten;
  @Input() kittensList?: Kitten[];
  @Output() sendKittenToParentForUser: EventEmitter<Kitten> = new EventEmitter();


  adoptKitten(kitten: Kitten) {
    this.sendKittenToParentForUser.emit(kitten);
  }
}
