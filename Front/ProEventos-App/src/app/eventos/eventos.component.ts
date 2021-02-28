import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrado: Evento[] = [];
  widthImg = 150;
  marginImg = 2;
  exibirImagem = true;

  private fltLista;

  public get filtroLista(): string {
    return this.fltLista;
  }
  public set filtroLista(value: string) {
    this.fltLista = value;
    this.eventosFiltrado = this.filtroLista ? this.filtrarEventos(this.fltLista) : this.eventos;
  }

  constructor(private http: HttpClient) {
    this.fltLista = '';
  }

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  filtrarEventos(filtro: string): Evento[] {
    filtro = filtro.toLocaleLowerCase();

    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtro) !== -1 ||
                evento.local.toLocaleLowerCase().indexOf(filtro) !== -1
    );
  }

  limparFiltro(): void{
    this.filtroLista = '';
    this.getEventos();
  }

  getEventos(): void {
    this.http
      .get<Evento[]>('https://localhost:5001/api/Evento')
      .subscribe(
        (response) => {

          this.eventos = response;
          this.eventosFiltrado = response;
        },
        (error) => console.error()

      );
  }
}
