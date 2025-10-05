import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() dataFromparent : any;




  // child to parent

  @Output() infofromchild = new EventEmitter();

  sendData(){
    this.infofromchild.emit(this.dataFromparent);
  }

}
