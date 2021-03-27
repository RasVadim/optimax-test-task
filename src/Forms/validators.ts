import { FormErrors, Normalizer, Validator } from "redux-form";

// Validators
export const required: Validator = (value) => (value ? undefined : "Required");
export const maxLength = (max: number): Validator => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = (min: number): Validator => (value) =>
  value && value.length < min ? `Minimum ${min} characters` : undefined;
export const number: Validator = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const maxValue = (max: number): Validator => (value) =>
  value && value > max ? `Maximum value is ${max}` : undefined;
export const minValue = (min: number): Validator => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const url: Validator = (value) =>
  value && !/(https?:\/\/.*\.(?:png|jpg))/i.test(value)
    ? "Invalid email address"
    : undefined;

// Normalizers
export const lessThan = (val: number): Normalizer => (
  value,
  previousValue,
  allValues
) => (parseFloat(value) < val ? value : previousValue);
