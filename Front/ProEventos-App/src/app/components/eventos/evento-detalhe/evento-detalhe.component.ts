import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  eventoForm: FormGroup;

  get form(): any{
    return this.eventoForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {
    this.eventoForm = this.formBuilder.group({
      Tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      Local: ['', Validators.required],
      DataEvento: ['', Validators.required],
      QtdPessoas: ['', [Validators.required, Validators.maxLength(120000)]],
      Telefone: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ImagemURL: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
}
