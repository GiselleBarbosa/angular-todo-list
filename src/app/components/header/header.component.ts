import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TodoForm } from '../todo-form/todo-form.component';

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
  private dialogService = inject(MatDialog);

  handleOpenModal() {
    this.dialogService.open(TodoForm, {
      width: '50vw',
      maxHeight: '80vh',
    });
  }
}
