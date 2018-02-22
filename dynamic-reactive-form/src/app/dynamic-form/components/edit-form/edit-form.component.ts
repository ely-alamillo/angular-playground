import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "edit-form",
  templateUrl: "./edit-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditForm {}
