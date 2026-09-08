
# RevealJS meets Markdown

The following slides show how the external example.md is rendered.

A paragraph with some text and a [link](https://thm.de).

---

## .md - Horizontal Slides

Line dividers (3 dashes) are used to distinguish individual slides in markdown.
Seperators however can also be customized (see next slide).

___

## .md - Vertical Slides

```html
<section data-markdown="example.md" data-separator-vertical="***">
</section>
```

Try this one out using your own custom separator

---

## .md - Background Color

 <!-- .slide: data-background="#ff0000" -->

Markdown content

---

## .md - Fragment Items

- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->

---

## .md - Syntax Highlighting

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
```

---

## .md - Line Number Offset

 ```js [712: 1-2|3|4]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
```

---

# .md - Images

This is an image with a speaker note from markdown:

![TestBild](./assets/icons/house.png)

Note: This is an example icon
