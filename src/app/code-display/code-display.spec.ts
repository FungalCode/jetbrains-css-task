import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CodeDisplay } from "./code-display";

describe("CodeDisplay", () => {
  let component: CodeDisplay;
  let fixture: ComponentFixture<CodeDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
