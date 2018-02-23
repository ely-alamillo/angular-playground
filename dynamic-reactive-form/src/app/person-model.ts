
interface InputModel<V> {
  label: string;
  value: V;
  type: string;
  validation?: Validation
}

interface Validation {
  required: boolean;
}

interface Name {
  label: string;
  value: string;
  type: string;
  validation: Validation;
}

interface Age {
  label: string;
  value: number;
  type: string;
}

interface Gender {
  label: string;
  value: string;
  type: string;
  options: ReadonlyArray<{label: string; value: string}>;
}

interface City {
  label: string;
  value: string;
  type: string;
  options: ReadonlyArray<{label: string; value: string}>;
  validation: Validation;
}

export interface Person {
  name: InputModel<string>;
  age: InputModel<number>;
  gender: Gender;
  city: City;
}

export const person: Person = {
    name: {
      label: "Name",
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
