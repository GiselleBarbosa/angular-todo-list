import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TodoSignalsService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class TodoForm {
  private todosService = inject(TodoSignalsService);

  public todoList = this.todosService.todosState();

  public todoForm = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(155),
      ],
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(155),
      ],
    }),
  });

  public handleCreateNewTodo(): void {
    if (this.todoForm.invalid) return;

    let todo = {
      title: this.todoForm.controls.title.value,
      description: this.todoForm.controls.description.value,
      id: this.todosService.generateId(),
      done: false,
    };

    this.todosService.updateTodos(todo);
  }
}
