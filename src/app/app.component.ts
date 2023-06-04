import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = signal(0)
  public lastUpdatedAt: Date | null
  public lastUpdatedMessage: string | null
  public readonly tripleCounter = computed(() => Math.pow(this.counter(), 3))

  constructor() {
    this.lastUpdatedAt = null
    this.lastUpdatedMessage = null

    effect(() => {
      this.lastUpdatedAt = new Date()
      this.lastUpdatedMessage = `The counter has been changed to "${this.counter()}"`
    });
  }

  public updateCounter(newValue?: string): void {
    this.counter.set(Number(newValue))
  }
}
