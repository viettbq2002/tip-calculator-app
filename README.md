# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [URL]([https://your-solution-url.com](https://github.com/viettbq2002/tip-calculator-app))
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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



