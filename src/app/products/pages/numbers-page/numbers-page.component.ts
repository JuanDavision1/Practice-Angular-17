import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PrimengModule,CommonModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
public totalSells:number =324324.324234;
public percentage:number=3.44;
}
