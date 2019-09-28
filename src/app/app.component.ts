import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Omar';

  constructor(){
    this.changeName('omi');
    console.log(this.name);
  }

  changeName(name:string){
    this.name = name;
  }
}
