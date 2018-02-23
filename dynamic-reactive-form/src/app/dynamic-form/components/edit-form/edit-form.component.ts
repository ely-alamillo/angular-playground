import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "edit-form",
  templateUrl: "./edit-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditForm implements OnInit {
  public personEditForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ){ }

  ngOnInit() {
    this.personEditForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: [""]
    })
  }
}
