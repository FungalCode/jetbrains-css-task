import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CodeDisplay} from "../code-display/code-display";

@Component({
  selector: "app-process",
  imports: [
    CommonModule,
    CodeDisplay
  ],
  templateUrl: "./process.html",
  styleUrl: "./process.css",
})
export class Process {
  level = signal(1);
  titles= ["HTML Elements", "Classes, Attributes", "IDs", "Inline Styles", "Important"]
  descriptions = ["div, p, h1", ".btn, [type=\"text\"], :hover", "#main, #profile", "style='color:red'", "color:blue !important"]

  handleMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    container.style.setProperty('--mouse-x', `${x}px`);
    container.style.setProperty('--mouse-y', `${y}px`);
  }

  addLevel() {
    if(this.level() < 5) {
      this.level.update(n => n + 1);
    }
  }
  removeLevel() {
    if(this.level() > 1) {
      this.level.update(n => n - 2);
    }
  }
}
