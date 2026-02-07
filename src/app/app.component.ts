import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ToggleComponent } from './toogle/toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, ToggleComponent],
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnChanges {
  value = false;
  number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['number']) {
      console.info('Valor :', changes['number'].currentValue);
    }
  }

  toggle() {
    this.value = !this.value;
  }

  increaseValue() {
    this.number += 1;
  }

  decreaseValue() {
    if (this.number >= 1) {
      this.number -= 1;
    }
    return;
  }
}
