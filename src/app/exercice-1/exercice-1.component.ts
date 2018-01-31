import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html'
})
export class Exercice1Component implements OnInit {

  // Ce Hostlistener permet d'ecouter un event sur la window globale;
  // Peut-être que cela vous sera utile dans votre directive !
  // @HostListener('window:click', ['$event']) windowClick($event) {
  //   console.log($event);
  // }

  constructor() {
  }

  ngOnInit() {
  }

}
