export class Evento {

  private EventoId: number;
  private Local: string;
  private DataEvento: string;
  private Tema: string;
  private QtdPessoas: number;
  private Lote: number;
  private ImagemURL: string;

  constructor() {
    this.EventoId = 0;
    this.Local = '';
    this.DataEvento = '';
    this.Tema = '';
    this.QtdPessoas = 0;
    this.Lote = 0;
    this.ImagemURL = '';
  }

  public get eventoId(): number {
    return this.EventoId;
  }
  public set eventoId(value: number) {
    this.EventoId = value;
  }

  public get local(): string {
    return this.Local;
  }
  public set local(value: string) {
    this.Local = value;
  }

  public get dataEvento(): string {
    return this.DataEvento;
  }
  public set dataEvento(value: string) {
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
}
