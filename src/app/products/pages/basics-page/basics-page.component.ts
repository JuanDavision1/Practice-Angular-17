import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [CommonModule,PrimengModule],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
public namelower:string='Juandavid';
public nameUpper : string ='JUAN DAVID';
public nametatlecase:string='Juan David';
public customDate :Date= new Date();

}
