import {Component, input} from "@angular/core";

@Component({
  selector: "app-code-display",
  imports: [],
  templateUrl: "./code-display.html",
  styleUrl: "./code-display.css",
})
export class CodeDisplay {
  level = input.required<number>();
}
