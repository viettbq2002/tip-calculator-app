# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
First look at the challenge and I was thought charka ui is best fit, Also use Jotai as lightweight  state management

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](https://github.com/viettbq2002/tip-calculator-app/assets/98259617/b21412ea-7dce-4f59-a7b5-9a8c402f2114)
![image](https://github.com/viettbq2002/tip-calculator-app/assets/98259617/f6ba43c1-39f2-49c2-a232-3e72e390df12)

![image](https://github.com/viettbq2002/tip-calculator-app/assets/98259617/7ac8bae0-e01d-48c5-9e09-06a7afead148)



### Links

- Solution URL: [https://github.com/viettbq2002/tip-calculator-app]
- Live Site URL: [Click here](https://tip-calculator-app-eight.vercel.app/)

## My process
Done in amount four hours coding

### Built with
- React JS
- Charka UI
- Jotai



### What I learned

Jotai is good choice for separate state calculation out of the UI so i can forcus on both one by one

```ts
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

```

## Author
- Frontend Mentor - [@viettbq](https://www.frontendmentor.io/profile/viettbq2002)
- Linkedin - [https://www.linkedin.com/in/qu%E1%BB%91c-vi%E1%BB%87t-103968237/]



