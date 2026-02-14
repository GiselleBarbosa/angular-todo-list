import { Injectable, signal, effect } from '@angular/core';
import { TodoDTO } from '../models/model/todo.model';
import { TodoKeyLocalStorage } from '../models/enum/todoKeyLocalStorage';

@Injectable({
  providedIn: 'root',
})
export class TodoSignalsService {
  public todosState = signal<TodoDTO[]>([]);

  constructor() {
    const stored = localStorage.getItem(TodoKeyLocalStorage.TODO_LIST);
    if (stored) {
      this.todosState.set(JSON.parse(stored));
    }

    effect(() => {
      localStorage.setItem(
        TodoKeyLocalStorage.TODO_LIST,
        JSON.stringify(this.todosState()),
      );
    });
  }

  public updateTodos(todo: TodoDTO): void {
    if (todo.title?.trim() && todo.description?.trim() && todo.id != null) {
      this.todosState.update((todos) => [...todos, todo]);
    }
  }

  public generateId(): number {
    const todos = this.todosState();
    return todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
  }
}
