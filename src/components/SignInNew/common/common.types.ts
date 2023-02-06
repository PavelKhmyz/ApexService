import { InputDataType } from "./common.enums";

export interface InputData {
  id: string;
  text: string;
  type: InputDataType;
  placeholder: string;
}
