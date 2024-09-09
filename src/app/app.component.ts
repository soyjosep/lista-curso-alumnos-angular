import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cursos:boolean = true

  handleCambio(){
    this.cursos=!this.cursos
  }
}
