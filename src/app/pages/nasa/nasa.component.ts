import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit{

  imgOfTheDay!: string;

  constructor(public nasaService: NasaService){}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((image: any) => {
      console.log('retour de api', image)
      //this.imgOfTheDay = url;
    });
  }
}
