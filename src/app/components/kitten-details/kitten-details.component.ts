import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../../models/Kitten';

@Component({
  selector: 'app-kitten-details',
  templateUrl: './kitten-details.component.html',
  styleUrls: ['./kitten-details.component.css']
})
export class KittenDetailsComponent {


  modal: boolean = false;
  @Input() kitten?: Kitten;
  @Output() sendKittenToParentForUser: EventEmitter<Kitten> = new EventEmitter();

  giveMeKitten(event: Event) {
    event.preventDefault();
    this.sendKittenToParentForUser.emit(this.kitten);
  }

  showImformation() {
    this.modal = !this.modal;
  }

}
