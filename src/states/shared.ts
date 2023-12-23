import { atom } from "jotai";

export const billAtom = atom(0);
export const tipPercentAtom = atom(0);
export const personAtom = atom(0);

export const tipAmountAtom = atom((get) => {
  const bill = get(billAtom);
  const tipPercent = get(tipPercentAtom);
  const person = get(personAtom);
  if (bill === 0 || person === 0 || tipPercent === 0) {
    return 0;
  }

  return (bill * (tipPercent / 100)) / person;
});
export const totalTipAmountAtom = atom((get) => {
  const bill = get(billAtom);
  const numberOfPerson = get(personAtom);
  const tipPercent = get(tipPercentAtom) / 100;

  if (bill === 0 || numberOfPerson === 0 || tipPercent === 0) {
    return 0;
  }
  return (bill * tipPercent + bill) / numberOfPerson;
});
