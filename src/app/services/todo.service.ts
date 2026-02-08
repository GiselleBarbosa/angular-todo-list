import { Injectable, signal } from '@angular/core';
import { TodoDTO } from '../models/model/todo.model';
import { TodoKeyLocalStorage } from '../models/enum/todoKeyLocalStorage';

@Injectable({
  providedIn: 'root',
})
export class TodoSignalsService {
  public todosState = signal<TodoDTO[]>([]);

  public updateTodos(todo: TodoDTO): void {
    if (todo.title?.trim() && todo.description?.trim() && todo.id != null) {
      this.todosState.update((todos) => [...todos, todo]);
    }

    this.saveTodosInLocalStorage();
  }

  public saveTodosInLocalStorage(): void {
    const todos = this.todosState();

    if (todos.length === 0) return;

    localStorage.setItem(TodoKeyLocalStorage.TODO_LIST, JSON.stringify(todos));
  }

  public loadTodosFromLocalStorage(): void {
    const stored = localStorage.getItem(TodoKeyLocalStorage.TODO_LIST);

    if (!stored) return;

    this.todosState.set(JSON.parse(stored));
  }

  public generateId(): number {
    const todos = this.todosState();
    return todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
  }
}
