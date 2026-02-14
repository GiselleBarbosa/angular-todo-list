import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoCardComponent } from "./components/todo-card/todo-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoCardComponent],
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
