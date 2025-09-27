import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstOneService {

  constructor() { }

  NamesArray: string[] = [];

  setData(data: string){
    this.NamesArray.push(data)
    console.log(this.NamesArray, "NamesArray");
  }

  getData(){
    return this.NamesArray;
  }
}
