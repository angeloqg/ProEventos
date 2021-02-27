import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.scss']
})
export class PalestrantesComponent implements OnInit {

  public palestrante: any = [
    {
      autor: 'Mauro Lago',
      area: 'Programação',
      formacao: 'Doutorado em Inteligência Artificial'
    },
    {
      autor: 'Juliana Oliveira',
      area: 'Administração',
      formacao: 'Especialista em Recursos Humanos'
    },
    {
      autor: 'José Anchieta',
      area: 'Arquitetura',
      formacao: 'Especialista em Arquitetura Moderna'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
