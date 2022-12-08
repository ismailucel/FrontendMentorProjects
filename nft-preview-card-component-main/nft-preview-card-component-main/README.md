# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](<./images/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20(1088).png>)
![](<./images/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20(1089).png>)
![](<./images/Ekran%20G%C3%B6r%C3%BCnt%C3%BCs%C3%BC%20(1090).png>)

## My process

### Built with

- Mobile-first workflow

### What I learned

How to use filter for image inside of a image

```css
.image {
  position: relative;
  cursor: pointer;
}
.image:hover .etheriumView {
  opacity: 1;
}

.image:hover .etheriumImage {
  filter: opacity(0.5) drop-shadow(0 0 0 var(--Cyan)) brightness(1.5);
}

.etheriumView {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
```

## Author

- Linkedin - [İsmail Üçel](https://www.linkedin.com/in/ismailucel/)
