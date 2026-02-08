import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_IMPORTS = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, MATERIAL_IMPORTS],
  standalone: true,
})
export class HeaderComponent {
  handleOpenModal() {
    alert('Adicionar tarefa');
  }
}
