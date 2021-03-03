import { Evento } from './Evento';
import { RedeSocial } from './RedeSocial';

export class Palestrante {

  private Id: number;
  private Nome: string;
  private MiniCurriculo: string;
  private ImagemURL: string;
  private Telefone: string;
  private Email: string;
  private RedesSociais: RedeSocial[];
  private PalestrantesEventos: Evento[];

  constructor() {
    this.Id = 0;
    this.Nome = '';
    this.MiniCurriculo = '';
    this.ImagemURL = '';
    this.Telefone = '';
    this.Email = '';
    this.RedesSociais = [];
    this.PalestrantesEventos = [];
  }

  public get id(): number {
    return this.Id;
  }
  public set id(value: number) {
    this.Id = value;
  }

  public get nome(): string {
    return this.Nome;
  }
  public set nome(value: string) {
    this.Nome = value;
  }

  public get miniCurriculo(): string {
    return this.MiniCurriculo;
  }
  public set miniCurriculo(value: string) {
    this.MiniCurriculo = value;
  }

  public get imagemURL(): string {
    return this.ImagemURL;
  }
  public set imagemURL(value: string) {
    this.ImagemURL = value;
  }

  public get telefone(): string {
    return this.Telefone;
  }
  public set telefone(value: string) {
    this.Telefone = value;
  }

  public get email(): string {
    return this.Email;
  }
  public set email(value: string) {
    this.Email = value;
  }

  public get redesSociais(): RedeSocial[] {
    return this.RedesSociais;
  }
  public set redesSociais(value: RedeSocial[]) {
    this.RedesSociais = value;
  }

  public get palestrantesEventos(): Evento[] {
    return this.PalestrantesEventos;
  }
  public set palestrantesEventos(value: Evento[]) {
    this.PalestrantesEventos = value;
  }
}
