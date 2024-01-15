import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, PrimengModule, ToggleCasePipe],
  template: `
    <p>order works!</p>
    <p-panel header="Pipes Personalizados" class="p-2">
      <p>
        Pipes Personalizados en Angular -Usualmente en el
        {{ 'Common' | toggleCasePipe : isUpperCase }} Module
      </p>
    </p-panel>

    <p-toolbar>
      <div class="p-toolbar-group-start">
        <p-button
          class="mr-2"
          icon="pi pi-sort"
          class="mr-2"
          label="ToogleCase"
          (click)="toogleUooercase()"
        >
        </p-button>
      </div>

      <div class="p-toolbar-group-end">
        <p-button
          class="mr-2"
          icon="pi pi-sort"
          class="mr-2"
          label="Por Nombre"
        >
        </p-button>

        <p-button class="mr-2" icon="pi pi-sort" label="Por volar"> </p-button>
        <p-button class="mr-2" icon="pi pi-sort" label="Por color"> </p-button>
      </div>
    </p-toolbar>
  `,
  styleUrl: './order.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  toogleUooercase(): void {
    console.log(this.isUpperCase)
    this.isUpperCase = !this.isUpperCase;
  }
}
