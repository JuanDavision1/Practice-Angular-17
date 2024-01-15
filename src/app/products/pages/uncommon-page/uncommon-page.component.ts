import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
//i18
public nam:string ='JuanDa';
public gender:'No binary'|'male' ='male'
public invitacion ={
  
}
changeclient():void{
  this.nam ='Meli'
  this.gender ='No binary'
}
}
