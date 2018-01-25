import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

// components
import { FormButton } from "../form-button";
import { FormSelect } from "../form-select";
import { FormInput } from "../form-input";

const components = {
  button: FormButton,
  select: FormSelect,
  input: FormInput
};

@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;
  public component;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}

