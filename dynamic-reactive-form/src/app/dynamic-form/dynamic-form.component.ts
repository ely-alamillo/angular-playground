import { Component, Input, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { concat, keys, map } from "sanctuary";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html"
})
export class DynamicForm implements OnChanges {
  @Input() model: any;

  public formModel: any;
  public form: FormGroup;

  ngOnChanges() {
    this.formModel = map((k: string) =>
      concat({keys: k})(this.model[k]))(keys(this.model));
    this.initForm();
  }

  initForm(): FormGroup {
    const validateFormCtrl = (v: string) => this.isNil(v) ? "" : v;

    return new FormGroup(keys(this.model)
      .map(k => ({[k]: new FormControl(validateFormCtrl(this.model.value), this.mapValidators(this.model[k].validation))}))
      .reduceRight((acc, v) => concat(v) (acc), {}));
  }

  isNil<N>(n?: N): boolean {
    return n === undefined || n === null;
  }

  mapValidators(v: any): ValidatorFn[] {
    const { required, min } = Validators;

    return Object.keys(this.isNil(v) ? [] : v).map(k => k === "required" ? required : min(v[k]))
  }
}
