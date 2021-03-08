import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  fomPerfil: FormGroup;

  firstName = '';
  lastName = '';
  descricao = '';
  nomeUsuario = 'Miracules Lee Cross';
  description = 'Developer of web applications, Javascript, PHP, Java, Pyton, Ruby, Node.Js, etc.';
  get form(): any{
    return this.fomPerfil.controls;
  }

  constructor(private formBuilder: FormBuilder) {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmPassword')
    };

    this.fomPerfil = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      cargo: ['', Validators.required],
      description: ['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.nullValidator]],
      confirmPassword: ['', Validators.nullValidator]
    }, formOptions);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    // Vai parar aqui se o form estiver inválido
    if (!this.fomPerfil?.valid) {
      return;
    }
  }

  public resetForm(event: any): void{

    this.fomPerfil.reset();

    this.firstName = '';
    this.lastName = '';
    this.descricao = '';

    event.preventDefault();

  }
}
