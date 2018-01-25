import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "dynamic-form",
  styleUrls: ["./dynamic-form.component.scss"],
  templateUrl: "./dynamic-form.component.html"
})
export class DynamicForm implements OnInit {
  @Input() config: ReadonlyArray<{ name: string }>;
  @Output() submitted = new EventEmitter();
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.createGroup();
  }

  private createGroup(): FormGroup {
    // group is never reassigned but form builder is being mutated.
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(control)));
    return group;
  }
}
