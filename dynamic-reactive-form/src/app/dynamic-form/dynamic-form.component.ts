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
  @Output() formChanges = new EventEmitter<{[key: string]: any}>();
  @Output() formSubmit = new EventEmitter<{[key: string]: any}>();

  public formModel: any;
  public form: FormGroup;
  public  uuid: string;

  constructor() {
  }

  ngOnInit(): void {
    this.formModel = map((k: string) =>
      concat({key: k})(this.model[k]))(keys(this.model));

    this.form = this.initForm();

    this.form.valueChanges.subscribe(inp => this.formChanges.emit(inp));

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

  submitForm(fv: any): void {
    this.formSubmit.emit(fv);
  }

  isShowError(f: FormGroup, key: string): boolean {
    return this.isNil(f)
      ? false
      : f.get(key).invalid && (f.get(key).dirty || f.get(key).touched);
  }
}
