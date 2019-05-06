import { Component, OnInit } from '@angular/core';
import { Visita } from '../Visita';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {

  visite: Visita[];
  selectedVisita: Visita;
  o: Observable<Visita[]>;

  constructor(public http:HttpClient) {
    this.getVisitaFromJSONServer();
   }

  addVisita(name: HTMLInputElement, address: HTMLInputElement, phone: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement)
  {
      let visita : Visita = new Visita();

      visita.name = name.value;
      visita.address = address.value;
      visita.phone = phone.value;
      visita.email = email.value;
      visita.date = data.value;

      this.visite.push(visita);
  }

  onSelect(visita: Visita): void {
    this.selectedVisita = visita;
  }

  getVisitaFromJSONServer() : void
  {
    this.o = this.http.get<Visita[]>('https://jsonplaceholder.typicode.com/posts');
    //this.o.subscribe(data => {this.fooData = data;});
  }


  ngOnInit() {
  }

}
