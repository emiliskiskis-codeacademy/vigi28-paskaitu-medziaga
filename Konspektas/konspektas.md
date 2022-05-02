<h1>CodeAcademy HTML/CSS/JS 1 lygio konspektas</h1>

- [HTML](#html)
  - [Kas yra HTML?](#kas-yra-html)
  - [HTML sintaksė](#html-sintaksė)
    - [Atributai](#atributai)
    - [Savaime užsidarančios žymės (angl. *self-closing tags*)](#savaime-užsidarančios-žymės-angl-self-closing-tags)
  - [Paprastų žymių sąrašas](#paprastų-žymių-sąrašas)
  - [HTML karkasas](#html-karkasas)
  - [HTML lentelės](#html-lentelės)
  - [HTML formos](#html-formos)
- [CSS](#css)
  - [Apie CSS](#apie-css)
  - [CSS sintaksė](#css-sintaksė)
  - [CSS selektoriai](#css-selektoriai)
  - [Paprasti CSS atributai](#paprasti-css-atributai)
  - [Sudėtingesni CSS selektoriai, naudojant kombinatorius](#sudėtingesni-css-selektoriai-naudojant-kombinatorius)
  - [CSS pseudoklasės](#css-pseudoklasės)
  - [Flexbox](#flexbox)
  - [Grid](#grid)
  - [Prisitaikantys puslapiai (*responsive websites*) naudojant @media](#prisitaikantys-puslapiai-responsive-websites-naudojant-media)
  - ["Mobile-first" dizainas](#mobile-first-dizainas)
  - [CSS karkasai (*frameworks*)](#css-karkasai-frameworks)
  - [CSS preprocesoriai (*preprocessors*)](#css-preprocesoriai-preprocessors)
  - [Git + Github](#git--github)
- [Atsakymai į praktikos užduotis](#atsakymai-į-praktikos-užduotis)
  - [Sudėtingesni CSS selektoriai, naudojant kombinatorius](#sudėtingesni-css-selektoriai-naudojant-kombinatorius-1)

# HTML

## Kas yra HTML?
HTML (HyperText Markup Language) yra pats pagrindinis žiniatinklio kūrimo elementas. Jis apibrėžia interneto turinio prasmę ir struktūrą. Kitos technologijos, išskyrus HTML, paprastai naudojamos aprašyti tinklalapio išvaizdą / pristatymą (CSS) arba funkcionalumą / elgesį (JavaScript).

HTML nėra programavimo kalba, tai žymėjimo kalba (angl. markup language), apibrėžianti jūsų turinio struktūrą.

## HTML sintaksė
```html
<tag>Elemento turinys</tag>
```

![](./html-syntax.png)

* Tag - žymė
* Opening tag - atidaromoji žymė
* Closing tag - uždaromoji žymė
* Content - turinys
* Element - elementas

Pvz.:

```html
<h1>Apie mus</h1>
```
```html
<p>Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌 Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝</p>
```

Turinys gali būti kitas HTML elementas. Pvz.:
```html
<body>
  <p>...</p>
</body>
```

```html
<p>Ši pastraipa turi <strong>paryškinto teksto</strong></p>
```

### Atributai

HTML žymės gali turėti atributus. Atributais aprašoma informacija, kuri nustato arba pakeičia elemento funkcionalumą, bet nėra tiesiogiai rodomi puslapyje.

![](html-attribute.png)

Šiuo atveju `<p>` (pastraipos) elementas turi atributą `class` su reikšmė `editor-note`.

Atributų sintaksė:

```html
<tag atributas="reikšmė"> </tag>
```

Atributų tvarka reikšmės neturi.

Atributai rašomi tik atidaromojoje žymėje.

Atributų reikšmės gali būti rašomos ir tarp viengubų kabučių (' '), tačiau geriausia naudoti tik vieno tipo kabutes, o ne maišyti abiejų.

Pvz.:

```html
<img src="DCIM_2022-02-13_12_30.jpg" alt="Lietuvos kraštovaizdis">
```

### Savaime užsidarančios žymės (angl. *self-closing tags*)

Kaip buvo paminėta apie `<img>` žymę, yra tam tikri elementai, kurie neturi uždaromosios žymės, nes niekada neturi vidinio turinio.

Šios žymės kartais rašomos su pasviruoju brūkšniu prieš `>` ženklą, štai taip:

```html
<tag />
```

Taip akivaizdžiau, kada žymė yra savaime užsidaranti ir neturi turinio. Šį brūkšnį galima rašyti tik tada, kai žymė yra savaime užsidaranti (pvz., `<p /> </p>` būtų neteisinga).

Keli pavyzdžiai:

- `<br />`
- `<hr />`
- `<img />`
- `<input />`
- `<link />`
- `<meta />`
- `<source />`

Pilnas (ne kiek didesnis) sąrašas: [http://xahlee.info/js/html5_non-closing_tag.html](http://xahlee.info/js/html5_non-closing_tag.html)

## Paprastų žymių sąrašas

* `<h1>`-`<h6>` - antraštė (1-6 lygio)

  Antraštės turi eiti iš eilės, t.y. jei yra 1-o lygio antraštė ir norima įtraukti mažesnio lygio antraštę, reikia naudoti 2-o lygio antraštę. Pvz.:
  ```html
  <h1>Jūriniai paukščiai</h1>

  <h2>1. Identifikacija</h2>

  <h2>2. Bendroji charakteristika</h2>

  <h3>2.1. Adaptacija prie jūrinės aplinkos</h3>

  <h3>2.2. Mityba</h3>

  <h4>2.2.1. Maisto rinkimas nuo paviršiaus</h4>

  <h4>2.2.2. Povandeninė medžioklė</h4>

  <h2>3. Santykiai su žmogumi</h4>
  ```

  Rezultatas:

  ![](headings.png)

* `<p>` - pastraipa

  Vienas iš paprasčiausių elementų, viduje parašytas tekstas bus formatuojamas kaip paprasta pastraipa.

* `<img>` - nuotrauka

  Reikalingi atributai:
  
  * `src` - nuoroda į nuotrauką
  * `alt` - nuotraukos aprašymas ekrano skaityklėms ar kai nuotrauka neprieinama

  Pvz.:
  ```html
  <img src="DCIM_2022-02-13_12_30.jpg" alt="Lietuvos kraštovaizdis">
  ```

  `<img>` neturi uždaromosios žymės.

* `<a>` - nuoroda

  Reikalingi atributai:
  
  * `href` - nuoroda, kuri bus atidaryta paspaudus ant teksto

  `<a>` žymės turinys yra nuorodos tekstas.

  Pvz.:

  ```html
  <a href="https://www.google.com/">Google</a>
  ```

  Rezultatas: [Google](https://www.google.com/)

* `<strong>` - paryškintas tekstas
* `<em>` - kursyvas
* `<u>` - pabrauktas tekstas
* `<div>`, `<span>` - semantinės reikšmės neturintys elementai, skirti pagrinde CSS apipavidalinimui pritaikyti, atitinkamai bloko ir įterptiniai elementai.
* `<br>` - eilutės lūžis
* `<hr>` - horizontalus brūkšnys

## HTML karkasas

```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Turinys -->
</body>
</html>
```

* `<!DOCTYPE html>` - preambulė naršyklėms, nurodanti HTML 5-tą versiją.
 
  Papildoma informacija (anglų k.):

    - [Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
    - [Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

* `<html>` - elementas, apimantis visą HTML turinį.
  
  * `lang` atributas nurodo puslapio turinio kalbą.

* `<head>` - elementas, kuriame dedami metainformacijos (informacijos apie patį puslapį) elementai.
* `<meta charset="utf-8">` - nustato simbolių koduotę į UTF-8
  
  Papildoma informacija: [Kas yra Unikodas?](https://www.unicode.org/standard/translations/lithuanian.html)
* `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - nustato tinkamą ekrano dydis mažiems ekranams
  
  Papildoma informacija (anglų k.): [Viewport \<meta\> tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
* `<title>` - nustato puslapio (skirtuko) pavadinimą.
* `<body>` - elementas, kuriame yra visas matomas puslapio turinys.

## HTML lentelės

## HTML formos

# CSS

## Apie CSS

CSS (Cascading Style Sheets) yra įrankis stilizuoti ir maketuoti žiniatinklio puslapius, pavyzdžiui, norint pakeisti turinio šriftą, spalvą, dydį ir tarpus, suskirstyti jį į kelis stulpelius arba pridėti animacijos ir kitų dekoratyvinių elementų.

Puslapio palyginimas be CSS ir su CSS:

| Be CSS | Su CSS |
| - | - |
| ![](css-example/no%20css.png) | ![](css-example/with%20css.png) |

## CSS sintaksė
```css
selector {
  attribute: value;
}
```

* selector - "pasirinkėjas", elementų, kuriems bus pritaikomas stilius, aprašymas
* attribute - stiliaus atributas (pvz. `color`, `font-size`)
* value - reikšmė

Pvz.:
```css
p {
  color: blue;
}
```

Vienam stiliaus aprašymui galima priskirti daugiau nei vieną atributą, pavyzdžiui:

```css
p {
  color: blue;
  background-color: aliceblue;
  font-size: 16pt;
}
```

## CSS selektoriai

Paprasčiausi CSS selektoriai:

* `tag` (žymės pavadinimas) - pasirenka visus tos žymės elementus, pvz. `p` pasirinktų visas pastraipas, `img` - visas nuotraukas.
* `.class` (stiliaus klasė) - pasirenka visus elementus, kurie turi klasės atributą su tuo pačiu pavadinimu, pvz. `.melyna` pasirenka visus elementus, kurie turi atributą `class="melyna"`. 
 
  Semantiškai geriausia vadinti klases pagal elementų paskirtį arba stiliaus pobūdį, pvz.:
  * jei turime nuotraukų galeriją, kiekvienai nuotraukai galime priskirti klasę `galerijos-nuotrauka`;
  * jei turime stiliaus aprašymą, kuriuo pakeičiame tekstą į paryškintą ir pabrauktą, galime tą klasę pavadinti `paryskinta`.

* `#id` (identifikatorius) - pasirenka elementą su `id` (identifikatoriaus) atributu. Šio atributo reikšmė yra unikali dokumente, kitaip sakant, vienas identifikatorius gali būti priskirtas tik vienam elementui. Pavyzdžiui, `#logotipas` selektorius pasirinks elementą su atributu `id="logotipas"`.

  Semantiškai ID geriausia vadinti pagal (unikalią) elemento paskirtį, bet ne stiliaus pobūdį. ID geriausia naudoti kaip selektorių tada, kai jau yra priskirtas ID kažkokiam elementui, o tai dažniausiai pasitaiko programuojant su Javascript, kai reikia manipuliuoti konkrečius elementus.

## Paprasti CSS atributai

* `color` - teksto spalva
* `background-color` - fono spalva
* `font-size` - šrifto dydis
* `font-family` - šriftas (pvz. Times New Roman, Arial, Calibri). Rašomas šrifto pavadinimas, jei yra tarpai, pilnas pavadinimas rašomas tarp viengubų `''` arba dvigubų `""` kabučių.
* `text-align` - teksto lygiavimas: `left`, `center`, `right` arba `justify`.
* `width`, `height` - elemento plotis, aukštis, ypač aktualu nuotraukoms (`img` elementams)
* `margin`- elemento paraštės
* `padding` - elemento užpildas (apkamšymas)
* `border` - elemento apvadas. Aprašomas taip: apvado dydis, apvado stilius, spalva. Pvz.: `2px solid blue`

`margin`, `padding` ir `border` papildomai yra `top`, `bottom`, `left` ir `right` atskiri atributai, kurie nustato tik tam tikrą pusę, pvz. `margin-top`, `padding-right`.

Spalvų galimos reikšmės:

  * [Spalvų pavadinimai](https://www.w3schools.com/cssref/css_colors.asp) (pvz. `blue`)
  * Hex išraiška (pvz. `#06b68f`)
  * RGB išraiška (pvz. `rgb(6, 182, 143)`)

Skaičių galimos reikšmės (dydžiams, pvz. `width`, `padding`):

  * Absoliutiniai matavimo vienetai: `px`, `pt`, `cm`
  * Reliatyvūs matavimo vienetai: `%`, `em`, `rem`

    Detalesnis aprašymas apie matavimo vienetus: [https://developer.mozilla.org/en-US/docs/Web/CSS/length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

## Sudėtingesni CSS selektoriai, naudojant kombinatorius

Pasidarykime pavyzdinę HTML struktūrą:

```html
<main class="turinys">
  <article class="svarbu">
    <h2>Dega Vilnius - KĄTIK ATNAUJINTA (10)</h2>
    <section>
      <h3>Kas nutiko?</h3>
      <p>Id et id excepteur mollit enim reprehenderit eiusmod ipsum tempor magna ad sint adipisicing ipsum.</p>
      <p>Anim laborum in est nisi veniam commodo excepteur proident elit qui deserunt deserunt ad.</p>
    </section>
    <section>
      <h3>Kodėl taip nutiko?</h3>
      <p>Deserunt Lorem esse id nulla in irure elit magna pariatur cillum occaecat tempor.</p>
      <p>Elit eu non culpa aute ea magna. Minim nulla ad exercitation nulla. Reprehenderit est et ipsum culpa nostrud consequat ex adipisicing consectetur nisi.</p>
    </section>
  </article>
  <article>
    <h2>Viskas brangsta</h2>
    <p>Aliquip officia nisi in nisi eiusmod minim excepteur eiusmod ut aute ad labore elit. Aliquip nostrud consequat deserunt esse in eiusmod amet dolore fugiat consequat nulla consectetur id. Est minim sunt elit ea tempor sunt irure culpa anim cillum dolor. Est deserunt aliqua do qui in voluptate in cillum sit. Laborum minim esse esse anim eu consectetur quis ea magna in.</p>
  </article>
  <article>
    <h2>Įžymybė išsiskyrė su kita įžymybe</h2>
    <p>Esse minim ut ut labore eiusmod cillum excepteur. Cillum officia minim sint deserunt.</p>
    <p>Elit officia ea deserunt reprehenderit. Dolor esse veniam minim commodo nulla eiusmod duis ut amet laborum.</p>
    <!-- Nesemantiniai elementai, kuriems suteikiama kodo semantika su CSS klasėmis -->
    <div class="komentarai">
      <div class="komentaras">
        <div class="vardas">Rimas</div>
        <div class="tekstas">Nebemiegu naktimis 😭😭😭</div>
        <div class="ivertinimai">👍200 👎10</div>
      </div>
      <div class="komentaras">
        <div class="vardas">Mantas</div>
        <div class="tekstas">Man tai visiškai neįdomu</div>
        <div class="ivertinimai">👍3 👎87</div>
      </div>
    </div>
  </article>
</main>
<div class="cookies">Naršydami svetainę, sutinkante su slapukų (angl. "cookies") panaudojimu.</div>
```

* `selector1, selector2, ...` - selektorių sąjunga (angl. *selector list*, "selektorių sąrašas"), pvz.:

  ```css
  h1, h2, h3, p {
    color: #333; /* #333 => #333333, #fff => #ffffff ir pan. */
  }
  ```
  Pasirenkami visi `h1`, `h2`, `h3` ir `p` elementai.

  MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list

* `selector1 selector2 ...` - hierarchinis kombinatorius (angl. *descendant combinator*, "palikuonio kombinatorius"): pasirenkami elementai pagal `selector2`, kurie yra `selector1` (ne)tiesioginiai vaikai, pvz.:

  ```css
  section p {
    ...
  }
  ```
  Pasirenkami visos pastraipos, kurios yra `section` elementuose, pavyzdžio atveju tik pirmo `article` pastraipos.

  ```css
  article div {
    ...
  }
  ```
  Pasirenkami visi `div` elementai, kurie yra `article` elementuose, pavyzdžio atveju visi `div` elementai paskutiniame `article` elemente.

  Jeigu rašomi keli selektoriai iš eilės, pvz.: `main article.svarbu section h3`, bus pasirenkami elementai pagal paskutinį selektorių, kurie iš eilės seka selektorių hierarchiją.

  MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator

* `selector1 > selector2 > ...` - tiesioginio vaiko kombinatorius (angl. *child combinator*, "vaiko kombinatorius") - veikia analogiškai kaip hierarchinis kombinatorius, tačiau šiuo atveju `selector2` privalo būti tiesioginis vaikas `selector1`. Pavyzdžiui, `article > div` pasirinktų tik `<div class="komentarai">` elementą.

  MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator

* `selector1 + selector2 + ...`: sekančio gretimo elemento kombinatorius (angl. *adjacent sibling combinator*, "gretimo brolio/sesers kombinatorius") - juo pasirenkamas tame pačiame lygyje esantis `selector1` selektorių griežtai sekantis elementas, jei jis atitinka `selector2`. Pvz.:

  ```css
  h2 + p {
    ...
  }
  ```

  Šiuo atveju bus pasirenkami `p` elementai, kurie eina iš karto po `h2` elementų, t.y. `Aliquip officia nisi in nisi eiusmod minim excepteur ...` ir `Esse minim ut ut labore eiusmod ...` pastraipos, **tačiau** ne `Elit officia ea deserunt reprehenderit. ...` pastraipa, nes ji nėra gretima `h2` elementui.


  Kitas pavyzdys:
  ```css
  article:first-child + article {
    ...
  }
  ```

  Su šiuo selektoriumi bus pasirinktas tik antras `article` elementas.

  MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator

* `selector1 ~ selector2 ~ ...` - sekančių elementų selektorius (angl. *general sibling combinator*, "bendro brolio/sesers kombinatorius") - veikia lygiai kaip `+` selektorius, tačiau pasirenka visus sekančius elementus, o ne tik griežtai sekantį. Selektorius `h2 ~ p` pasirinks **ir** `Elit officia ea deserunt reprehenderit. ...` pastraipą ir `article:first-child + article` selektorius pasirinks visus `article` elementus nuo antro.

Pasibandymui: kokie elementai bus pasirinkti su šiais selektoriais?

1. `.svarbu p`
2. `.turinys > h2 + p`
3. `article, section > p`

[Atsakymai](#sudėtingesni-css-selektoriai-naudojant-kombinatorius-1)

## CSS pseudoklasės

## Flexbox

## Grid

## Prisitaikantys puslapiai (*responsive websites*) naudojant @media

## "Mobile-first" dizainas

## CSS karkasai (*frameworks*)

## CSS preprocesoriai (*preprocessors*)

## Git + Github

# Atsakymai į praktikos užduotis

## Sudėtingesni CSS selektoriai, naudojant kombinatorius

1. `.svarbu p` - 4 pastraipos:

  ```html
  <p>Id et id excepteur mollit enim reprehenderit eiusmod ipsum tempor magna ad sint adipisicing ipsum.</p>
  <p>Anim laborum in est nisi veniam commodo excepteur proident elit qui deserunt deserunt ad.</p>
  <p>Deserunt Lorem esse id nulla in irure elit magna pariatur cillum occaecat tempor.</p>
  <p>Elit eu non culpa aute ea magna. Minim nulla ad exercitation nulla. Reprehenderit est et ipsum culpa nostrud consequat ex adipisicing consectetur nisi.</p>
  ```

2. `.turinys > h2 + p` - niekas, nes nėra nė vieno `h2` elemento, kuris būtų tiesioginis `<main class="turinys">` elemento vaikas.
3. `section, article > p` - visi `section` elementai bei šios pastraipos:

  ```html
  <p>Aliquip officia nisi in nisi eiusmod minim excepteur eiusmod ut aute ad labore elit. Aliquip nostrud consequat deserunt esse in eiusmod amet dolore fugiat consequat nulla consectetur id. Est minim sunt elit ea tempor sunt irure culpa anim cillum dolor. Est deserunt aliqua do qui in voluptate in cillum sit. Laborum minim esse esse anim eu consectetur quis ea magna in.</p>
  <p>Esse minim ut ut labore eiusmod cillum excepteur. Cillum officia minim sint deserunt.</p>
  <p>Elit officia ea deserunt reprehenderit. Dolor esse veniam minim commodo nulla eiusmod duis ut amet laborum.</p>
  ```