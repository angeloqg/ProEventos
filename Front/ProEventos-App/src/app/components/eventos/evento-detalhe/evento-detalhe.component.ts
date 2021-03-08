import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,) {
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

  public resetForm(): void{
      this.eventoForm.reset();
  }

  ngOnInit(): void {
  }

  salvarEvento(): void{
    this.toastr.success('O evento foi salvo com sucesso!', 'Evento Salvo!');
  }
}
