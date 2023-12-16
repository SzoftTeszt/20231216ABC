import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Output() kategoriaValtas: EventEmitter<any>=new EventEmitter()

  aktivKategoria=0
  kategoriak=["BBQ","Zöldség, gyümölcs","Tejtermékek, tojás","Pékáru","Hús, hal, felvágott","Alapvető élelmiszerek","Speciális és egészséges táplálkozás","Fagyasztott élelmiszerek","Italok","Alkohol","Háztartás","Szépségápolás","Babaápolás","Kisállat","Otthon, hobbi","Ruházat"]

  KategoriatValt(i:any){
    this.aktivKategoria=i
    this.kategoriaValtas.emit(this.kategoriak[i])
  }

}
