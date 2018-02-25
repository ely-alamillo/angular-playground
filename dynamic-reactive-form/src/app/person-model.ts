interface InputModel<V> {
  label: string;
  value: V;
  type: string;
  validation?: Validation;
  options?: ReadonlyArray<Partial<InputModel<V>>>;
}

interface Validation {
  required: boolean;
}

export interface Person {
  firstName: InputModel<string>;
  lastName: InputModel<string>;
  age: InputModel<number>;
  gender: InputModel<string>;
  city: InputModel<string>;
}

export const person: Person = {
    firstName: {
      label: "First Name",
      value: "Juri",
      type: "text",
      validation: {
        required: true
      }
    },
    lastName: {
      label: "Last Name",
      value: "Juri",
      type: "text",
      validation: {
        required: true
      }
    },
    age: {
      label: "Age",
      value: 32,
      type: "text",
      validation: {
        required: true
      }
    },
    gender: {
      label: "Gender",
      value: "M",
      type: "radio",
      options: [{ label: "Male", value: "M" }, { label: "Female", value: "F" }]
    },
    city: {
      label: "City",
      value: "39010",
      type: "select",
      options: [
        { label: "(choose one)", value: "" },
        { label: "Bolzano", value: "39100" },
        { label: "Meltina", value: "39010" },
        { label: "Appiano", value: "39057" }
      ],
      validation: {
        required: true
      }
    }
  };
