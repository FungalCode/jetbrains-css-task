import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Process} from "./process/process";

@Component({
  selector: 'app-root',
  imports: [
    Process
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('css-task');
}
