import { Component } from '@angular/core';
import { devTest } from '../models/mock-dev';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  dev = devTest;

}
