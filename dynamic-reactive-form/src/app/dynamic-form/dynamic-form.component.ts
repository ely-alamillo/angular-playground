import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html"
})
export class DynamicForm implements OnChanges {
  @Input() model: any;

  ngOnChanges() {
    console.table(this.model);
  }
}
