import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggleModule, MatButton],
  templateUrl: 'toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent implements OnChanges {
  @Input() checked = false;
  @Input() value = 0;
  @Output() counterIncreaseEvent: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() counterDecreaseEvent: EventEmitter<number> =
    new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checked']) {
      console.info('toggle :', changes['checked'].currentValue);
    }

    if (changes['value']) {
      console.info('Valor :', changes['value'].currentValue);
    }
  }

  increaseValue() {
    this.counterIncreaseEvent.emit();
  }

  decreaseValue() {
    this.counterDecreaseEvent.emit();
  }
}
