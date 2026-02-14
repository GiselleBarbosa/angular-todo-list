import { NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoDTO } from '../../models/model/todo.model';
import { TodoSignalsService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: 'todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTabsModule, NgIf],
})
export class TodoCardComponent {
  private todosService = inject(TodoSignalsService);
  private todoSignal = this.todosService.todosState;
  public todoList = computed(() => this.todoSignal());

  public handleDoneTodo(todoId: number): void {
    this.todoSignal.update((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, done: true } : todo,
      ),
    );
  }

  public handleDeleteTodo(todo: TodoDTO): void {
    this.todoSignal.update((todos) => todos.filter((t) => t.id !== todo.id));
  }
}
