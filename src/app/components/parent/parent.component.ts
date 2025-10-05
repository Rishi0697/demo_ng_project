import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  empDetails = {}
  gotMessage : any;

  ngOnInit(){
  this.empDetails = {
    name : "Rishikesh",
    age : 28,
    gender : "Male"
  }
  }

  recievedData(message : any){
    this.gotMessage = `${message.name} ${message.age} ${message.gender}` ;
  }
}
