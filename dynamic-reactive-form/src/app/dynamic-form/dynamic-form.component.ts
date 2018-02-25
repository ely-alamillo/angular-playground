import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { concat, keys, map } from "sanctuary";

interface ModelValidator {
  required: boolean;
  [key: string]: any;
}

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html"
})
export class DynamicForm implements OnInit {
  @Input() model: any;
  @Output() formInput = new EventEmitter();

  public formModel: any;
  public form: FormGroup;

  ngOnInit(): void {
    this.formModel = map((k: string) =>
      concat({key: k})(this.model[k]))(keys(this.model));

    this.form = this.initForm();

    this.form.valueChanges.subscribe(inp => this.formInput.emit(inp));

  }

  initForm(): FormGroup {
    const safeValue = (v: string) => this.isNil(v) ? "" : v;

    return new FormGroup(keys(this.model)
      .map(k => ({[k]: new FormControl(safeValue(this.model.value), this.mapValidators(this.model[k].validation))}))
      .reduceRight((acc, v) => concat(v) (acc), {}));
  }

  isNil<N>(n?: N): boolean {
    return n === undefined || n === null;
  }

  mapValidators<V>(v: ModelValidator): ValidatorFn[] {
    const { required, min } = Validators;
    return Object.keys(this.isNil(v) ? [] : v).map(k => k === "required" ? required : min(v[k]));
  }

  // isShowError(f: FormGroup, key) {
  // f.get(prop.key).invalid && (f.get(prop.key).dirty || f.get(prop.key).touched)
  //   return f.get(key)
  // }
}