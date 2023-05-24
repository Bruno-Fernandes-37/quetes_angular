import { Component } from '@angular/core';
import { Kitten } from '../models/Kitten';
import { kittensTest } from '../models/mocks/mock-kittens';

@Component({
  selector: 'app-kitten-story',
  templateUrl: './kitten-story.component.html',
  styleUrls: ['./kitten-story.component.css']
})
export class KittenStoryComponent {

  kittensList: Kitten[] = kittensTest;
  kittensUser: Kitten[] = [];

  adoptKitten(kitten: Kitten): void {
    this.kittensUser.push(kitten);
    this.kittensList = this.kittensList.filter(kittenList => kittenList !== kitten);
  }

  onReceiveNewKitten(newKitten: Kitten): void {
    this.kittensList.push(newKitten);
  }
}
