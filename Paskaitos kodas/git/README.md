# Git

## `git config`

Git konfigūracijos valdymas

- Be žymių - nustatoma konfigūracijos reikšmė
- `--global` - konfigūracijos nustatymai visoms kompiuterio paskyros repozitorijoms (sukuriamas `.gitconfig` failas `%USERPROFILE%` (`$HOME`) direktorijoje)
- `--get` - patikrinti konfigūracijoje esančią reikšmę

```
$ git config [--global] user.name "Vardas Pavardė"
$ git config [--global] user.email "vardas.pavarde@mail.com"
```

```
$ git config [--global] --get user.name
Vardas Pavardė
$ git config [--global] --get user.email
vardas.pavarde@mail.com
```

**!** _`user.name` ir `user.email` laukai yra privalomi kurti commitus._

## `git init`

Sukuriama Git repozitorija.

- `-b`, `--initial-branch=` - nurodyti pagrindinės šakos pavadinimą (numatytasis `master` arba `main`)

### O ne, sukūriau Git repozitoriją ne ten, kur tikėjaus! Ką daryti?

`git init` komanda sukuria `.git` direktoriją. Ją ištrynus, bus ištrinta repozitorija, bet ne kiti failai.

## `git add`

Įtraukti failus ar jų pakeitimus į indeksą.

Indeksas - sąrašas failų, kurie bus įtraukti į repozitoriją sukūrus commitą.

Komandos naudojimo būdas: `git add [failas arba direktorija 1] [f/d 2] [...]`

- Direktorija - vieta kompiuteryje, kurioje laikomi failai (katalogas, tačiau dažniausiai turima omenyje vietą kompiuteryje)
- `.`, `..` - ypatingos reliatyvios direktorijos: `.` reiškia darbinę direktoriją, `..` reiškia darbinės tėvinę direktoriją

Pvz.:

```
# Windows
C:\Users\emilis\repos\code_academy> git add . #Įtraukti visus failus, esančius dabartinėje direktorijoje
C:\Users\emilis\repos\code_academy> git add html #Įtraukti visus failus, esančius "C:\Users\emilis\repos\code_academy\html" direktorijoje
C:\Users\emilis\repos\code_academy\html> git add index.html style.css index.js #Įtraukti išvardintus failus, esančius "html" direktorijoje
(komandos išvestis)

# MacOS, Linux
/home/emilis/repos/code_academy$ git add .
/home/emilis/repos/code_academy$ git add html
/home/emilis/repos/code_academy/html$ git add index.html style.css index.js
```

### O ne, pridėjau ne tuos failus, kuriuos norėjau! Kaip juos išimti?

Tam, kad išimti pakeitimus iš indekso, naudokite `git reset <failų sąrašas>` komandą.

## `git commit`

Commitina failų indeksą į repozitoriją.

Komandos galimybės didelės, tačiau paprasčiausias naudojimas:

- `git commit` - commitinti failus indekse
- `git commit -a` - commitinti darbinį medį (`working tree`, t.y. visus esamus pakeitimus)
- `git commit -m "Commit pranešimas"` - commitinti pranešimą nurodžius komandoje
- `git commit -a -m "Commit pranešimas"` - `-a` ir `-m` žymės panaudotos kartu

## `git branch`

Valdo repozitorijos šakas (_branches_).

- `git branch <pavadinimas>` - sukuria naują šaką
- `git branch -d <pavadinimas>` - ištrina šaką, jeigu jos pakeitimai įtraukti į kitą šaką
- `git branch -D <pavadinimas>` - ištrina šaką bet kokiu atveju

## `git checkout`

Pakeičia "galvutės" (_HEAD_) vietą repozitorijoje.

HEAD yra tas taškas repozitorijoje, kurios failai dabar yra atspindėti failų sistemoje. Kadangi tai yra taškas, HEAD galima pakeisti ne tik į kitą šaką, bet ir į specifinius commitus.

- `git checkout <šakos pavadinimas>` - pakeičiamas HEAD į šakos naujausią commitą
- `git checkout <commit hash>` - pakeičiamas HEAD į commitą pagal jo _hash_
- `git checkout -b <šakos pavadinimas>` - sukuriama nauja šaka duotu pavadinimu ir HEAD pakeičiamas į tos šakos naujausią commitą (kuris yra tas pats commitas)

`git checkout` neveikia, jei yra konfliktinių working tree arba index pakeitimų.

## Darbas su GitHub

Darbui su nuotolinėm repozitorijom skirtos komandos yra `git remote`, `git fetch`, `git push`, `git pull`.

- `git clone <nuoroda>` - atsisiųsti nuotolinę repozitoriją į kompiuterį
- `git remote add <nuotolio pavadinimas> <nuoroda>` - pridėti nuotolinę repozitoriją
- `git remote set-url <nuotolio pavadinimas> <nuoroda>` - pakeisti nuotolinės repozitorijos nuorodą
- `git remote get-url <nuotolio pavadinimas>` - patikrinti nuotolio nuorodą
- `git fetch [nuotolio pavadinimas]` - atsisiųsti duomenis iš nuotolinės repozitorijos
- `git pull [nuotolio pavadinimas]` - atlikti `git fetch` ir sulieti pakeitimus iš nuotolio į lokalią repozitoriją
- `git push [nuotolio pavadinimas]` - įkelti lokalios repozitorijos duomenis į nuotolį
