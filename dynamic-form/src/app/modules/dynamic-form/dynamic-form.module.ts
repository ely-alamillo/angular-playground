import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// containers
import { DynamicForm } from "./containers";
// components
import { FormButton, FormInput, FormSelect, DynamicFieldDirective } from "./components";

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [DynamicForm, FormButton, FormInput, FormSelect, DynamicFieldDirective],
  exports: [DynamicForm],
  entryComponents: [ FormButton, FormInput, FormSelect ]
})
export class DynamicFormModule {}

