export class RedeSocial {

  private Id: number;
  private Nome: string;
  private URL: string;
  private EventoId?: number | undefined;
  private PalestranteId?: number | undefined;

  constructor() {
    this.Id = 0;
    this.Nome = '';
    this.URL = '';
    this.EventoId = 0;
    this.PalestranteId = 0;
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

  public get url(): string {
    return this.URL;
  }
  public set url(value: string) {
    this.URL = value;
  }

  public get eventoId(): number | undefined {
    return this.EventoId;
  }
  public set eventoId(value: number | undefined) {
    this.EventoId = value;
  }

  public get palestranteId(): number | undefined {
    return this.PalestranteId;
  }
  public set palestranteId(value: number | undefined) {
    this.PalestranteId = value;
  }
}
