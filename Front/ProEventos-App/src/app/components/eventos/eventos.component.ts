import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  // Injeção de dependência direto no componente
  providers: [EventoService]
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrado: Evento[] = [];
  public widthImg = 150;
  public marginImg = 2;
  public exibirImagem = true;

  public modalRef: BsModalRef | undefined;
  message: string | undefined;

  private fltLista;

  public get filtroLista(): string {
    return this.fltLista;
  }
  public set filtroLista(value: string) {
    this.fltLista = value;
    this.eventosFiltrado = this.filtroLista ? this.filtrarEventos(this.fltLista) : this.eventos;
  }

  constructor(private evento: EventoService,
              private modalService: BsModalService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) {
    this.fltLista = '';

  }

  public ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public filtrarEventos(filtro: string): Evento[] {
    filtro = filtro.toLocaleLowerCase();

    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtro) !== -1 ||
                evento.local.toLocaleLowerCase().indexOf(filtro) !== -1
    );
  }

  public limparFiltro(): void{
    this.filtroLista = '';
    this.getEventos();
  }

  public getEventos(): void {
    this.evento.getEventos()
      .subscribe({
          next: (response: Evento[]) => {
            this.eventos = response;
            this.eventosFiltrado = response; },
          error: (error: any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao carregar os eventos!', 'Erro!');
          },
          complete: () => this.spinner.hide()
      });
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O evento deletado com sucesso!', 'Deletado!');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
