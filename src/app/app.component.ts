import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Injector,
} from '@angular/core';
import { createEditor } from './editor';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'rete-test-application';

  constructor(private injector: Injector) {}

  @ViewChild('rete') container!: ElementRef;

  ngAfterViewInit(): void {
    const el = this.container.nativeElement;

    if (el) {
      createEditor(el, this.injector);
    }
  }
}
