# CodeAcademy HTML/CSS/JS 1 lygio konspektas


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
* `font-family` - šriftas (pvz. Times New Roman, Arial, Calibri). Rašomas šrifto pavadinimas, jei yra tarpai, 
* `text-align` - teksto lygiavimas
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