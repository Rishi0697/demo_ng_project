import { Component } from '@angular/core';
import { FirstOneService } from 'src/app/services/first-one.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'Header Component';
  imageUrl = 'https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg';
  items : string[] = [];
 
  constructor( private firstService : FirstOneService) {  }

  ngOnInit(){
    this.items = this.firstService.getData();
  }
}
