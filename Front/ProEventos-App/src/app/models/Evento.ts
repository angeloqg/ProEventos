import { Lote } from './Lote';
import { Palestrante } from './Palestrante';
import { RedeSocial } from './RedeSocial';

export class Evento {

  private Id: number;
  private Local: string;
  private DataEvento?: Date | undefined;
  private Tema: string;
  private QtdPessoas: number;
  private Lote: number;
  private ImagemURL: string;
  private Telefone: string;
  private Email: string;
  private Lotes: Lote[] = [];
  private RedesSociais: RedeSocial[];
  private EventosPalestrantes: Palestrante[];

  constructor() {
    this.Id = 0;
    this.Local = '';
    this.DataEvento = new Date();
    this.Tema = '';
    this.QtdPessoas = 0;
    this.Lote = 0;
    this.ImagemURL = '';
    this.Telefone = '';
    this.Email = '';
    this.RedesSociais = [];
    this.EventosPalestrantes = [];
  }

  public get id(): number {
    return this.Id;
  }
  public set id(value: number) {
    this.Id = value;
  }

  public get local(): string {
    return this.Local;
  }
  public set local(value: string) {
    this.Local = value;
  }

  public get dataEvento(): Date | undefined {
    return this.DataEvento;
  }
  public set dataEvento(value: Date | undefined) {
    this.DataEvento = value;
  }

  public get tema(): string {
    return this.Tema;
  }
  public set tema(value: string) {
    this.Tema = value;
  }

  public get qtdPessoas(): number {
    return this.QtdPessoas;
  }
  public set qtdPessoas(value: number) {
    this.QtdPessoas = value;
  }

  public get lote(): number {
    return this.Lote;
  }
  public set lote(value: number) {
    this.Lote = value;
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

  public get lotes(): Lote[] {
    return this.Lotes;
  }
  public set lotes(value: Lote[]) {
    this.Lotes = value;
  }

  public get eventosPalestrantes(): Palestrante[] {
    return this.EventosPalestrantes;
  }
  public set eventosPalestrantes(value: Palestrante[]) {
    this.EventosPalestrantes = value;
  }
}
