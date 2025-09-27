import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstOneService } from 'src/app/services/first-one.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private firstOneService: FirstOneService) { }
  name: string = 'Rishikesh';

  AddName(){
    this.firstOneService.setData(this.name);
    this.name = '';
  }

  onButtonClick() {
    this.router.navigateByUrl('/header');
  }


}
