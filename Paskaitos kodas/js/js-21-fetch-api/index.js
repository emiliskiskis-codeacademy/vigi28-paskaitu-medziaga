/*
Prekių katalogas
Krepšelis
Bankas
Norų sąrašas
Prekė
*/

class Krepselis {
  constructor() {
    this.prekes = [];
  }

  pridetiPreke(preke, kiekis = 1) {
    this.prekes.push({
      id: preke.id,
      kiekis
    });
  }

  isimtiPreke(preke) {
    this.prekes.splice(
      this.prekes.findIndex(krepselioPreke => krepselioPreke.id === preke.id),
      1
    );
  }
}
