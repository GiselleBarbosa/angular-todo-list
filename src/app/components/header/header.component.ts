import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const MAT_IMPORTS = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ...MAT_IMPORTS],
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  handleOpenModal() {
    alert('Adicionar tarefa');
  }
}
