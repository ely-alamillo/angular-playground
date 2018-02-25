import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// components
import { DynamicForm } from "./dynamic-form.component";

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule ],
  declarations: [DynamicForm],
  exports: [DynamicForm]
})
export class DynamicFormModule {}
