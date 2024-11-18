# Reveal.js THM Template

[![pipeline status](https://git.thm.de/tjkc14/revealjs-thm-template/badges/master/pipeline.svg)](https://tjkc14.git-pages.thm.de/revealjs-thm-template/)

This is a THM corporate design template for the reveal.js Framework.
This Repo is currently under construction not all features you may need are implemented today. Feel free to add them to your liking or just kindly ask for them.

## See [Demo](https://tjkc14.git-pages.thm.de/revealjs-thm-template/) for yourself

Starting today, you can take a test drive of the "Frankenstein" version of the original PowerPoint presentations in our corporate design and hakimel's demo presentation on a statically hosted GitLab page. I've brought this presentation to life, stitching together the best elements from both worlds to showcase the possibilities.  
Explore the fusion of our CI-Design and the content that drives reveal.js, on this page: <https://tjkc14.git-pages.thm.de/revealjs-thm-template/>

Note: On statically hosted Git-pages free-hand-writings are only kept until you reload the page!

## Version 5 is here: [SCROLL VIEW](https://tjkc14.git-pages.thm.de/revealjs-thm-template/?view=scroll)

Try the new scroll view introduced by hakimel and now also supported by this fork. It is especially useful for Mobile. Either add `/?view=scroll` to watch it in one instance - or see the `Reveal.initialize({})` configuration section to enable it globally if you like it.

## Easily configurable faculty logos

Configuring your faculty's logo has never been easier. See the `Reveal.initialize({})` configuration section for more information.

```js
thmlogos: {
  logo: 'MNI_CG',       // Fachbereichslogo
  logo_addition: 'ITI_MNI_CG',   // Beispiel: Logozusatz (feel free to uncomment this line, if you don't need a second logo)
  // Recipe: FB_{CG = Campus Gießen, CF = Campus Friedberg}
  // usage: logo: {'THM', 'ITI', 'MNI_CG', 'ITI_MNI_CG', 'IEM_CF', 'M_CF', 'MND_CF', 'WI_CF', 'MUK_CF', 'BAU_CG', 'EI_CG', 'ME_CG', 'LES_CG', 'GES_CG', 'WIRTSCHAFT_CG', 'MUK_CG', 'STUDIUM_PLUS'}
},
```

## Export to PDF

Use the integrated [print-view](https://tjkc14.git-pages.thm.de/revealjs-thm-template/?print-pdf) to easily export your presentation as a pdf. Now featuring full page numbering with the option to split fragmented slides on export. See the `Reveal.initialize({})` configuration for more information.

## Installation

1. Install [Node.js](https://nodejs.org/en) (10.0.0 or later)
2. Clone this Repo in full depth - otherwise there are some plugins you might need to pull seperately as this template comes with a small selection preconfigured.
3. `npm install` and `npm run start`

### Just in case you missed cloning with submodules

```bash
cd plugins
git clone https://github.com/denehyg/reveal.js-menu.git
git clone https://github.com/rajgoel/reveal.js-plugins.git
```

## Credit To REVEALJS

<p align="center">
  <a href="https://revealjs.com">
  <img src="https://hakim-static.s3.amazonaws.com/reveal-js/logo/v1/reveal-black-text-sticker.png" alt="reveal.js" width="500">
  </a>
  <br><br>
  <a href="https://github.com/hakimel/reveal.js/actions"><img src="https://github.com/hakimel/reveal.js/workflows/tests/badge.svg"></a>
  <a href="https://slides.com/"><img src="https://s3.amazonaws.com/static.slid.es/images/slides-github-banner-320x40.png?1" alt="Slides" width="160" height="20"></a>
</p>

reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create beautiful presentations for free. Check out the live demo at [revealjs.com](https://revealjs.com/).

The framework comes with a powerful feature set including [nested slides](https://revealjs.com/vertical-slides/), [Markdown support](https://revealjs.com/markdown/), [Auto-Animate](https://revealjs.com/auto-animate/), [PDF export](https://revealjs.com/pdf-export/), [speaker notes](https://revealjs.com/speaker-view/), [LaTeX typesetting](https://revealjs.com/math/), [syntax highlighted code](https://revealjs.com/code/) and an [extensive API](https://revealjs.com/api/).

---

Want to create reveal.js presentation in a graphical editor? Try <https://slides.com>. It's made by the same people behind reveal.js.

---

### Sponsors

Hakim's open source work is supported by <a href="https://github.com/sponsors/hakimel">GitHub sponsors</a>. Special thanks to:
<div align="center">
  <table>
    <td align="center">
      <a href="https://workos.com/?utm_campaign=github_repo&utm_medium=referral&utm_content=revealjs&utm_source=github">
        <div>
          <img src="https://user-images.githubusercontent.com/629429/151508669-efb4c3b3-8fe3-45eb-8e47-e9510b5f0af1.svg" width="290" alt="WorkOS">
        </div>
        <b>Your app, enterprise-ready.</b>
        <div>
          <sub>Start selling to enterprise customers with just a few lines of code. Add Single Sign-On (and more) in minutes instead of months.</sup>
        </div>
      </a>
    </td>
  </table>
</div>

---

### Getting started

- 🚀 [Install reveal.js](https://revealjs.com/installation)
- 👀 [View the demo presentation](https://revealjs.com/demo)
- 📖 [Read the documentation](https://revealjs.com/markup/)
- 🖌 [Try the visual editor for reveal.js at Slides.com](https://slides.com/)
- 🎬 [Watch the reveal.js video course (paid)](https://revealjs.com/course)

---
<div align="center">
  MIT licensed | Copyright © 2011-2024 Hakim El Hattab, https://hakim.se
</div>
