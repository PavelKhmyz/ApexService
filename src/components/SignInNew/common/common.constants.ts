import { InputDataType, InputType } from "./common.enums";
import { InputData } from "./common.types";

// мне вот этот подход который ты сразу выстроил вообще не нравится.
// по идее все эти поля должны идти в сам инпут
// я это оставил чтобы показать как можно использовать типы и енамы для таких ситуация

export const inputDataByType: Record<InputType, InputData> = {
  [InputType.Email]: {
    id: "signInInput1",
    text: "E-mail:",
    type: InputDataType.Text,
    placeholder: "Enter your E-mail",
  },
  [InputType.Password]: {
    id: "signInInput2",
    text: "Password:",
    type: InputDataType.Password,
    placeholder: "Enter your Password",
  },
  [InputType.ConfirmPassword]: {
    id: "signInInput3",
    text: "Confirm:",
    type: InputDataType.Password,
    placeholder: "Enter Password again",
  },
  [InputType.PlayerName]: {
    id: "signInInput4",
    text: "Player Name:",
    type: InputDataType.Text,
    placeholder: "Name",
  },
};
