import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  template: `<p>menu works!</p>
    <p-menubar [model]="items">
      <img src="./favicon.ico" alt="icono" />
    </p-menubar> `,
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink:'Numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink:'Uncommon'
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-config',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-align-left',
            routerLink:'custom'
          },
        ],
      },
    ];
  }
}
