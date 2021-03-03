export class Lote {
  private Id: number;
  private Nome: string;
  private Preco: number;
  private DataInicio?: Date | undefined;
  private DataFim?: Date | undefined;
  private Quantidade: number;
  private EventoId: number;

  constructor() {
    this.Id = 0;
    this.Nome = '';
    this.Preco = 0;
    this.DataInicio = new Date();
    this.DataFim = new Date();
    this.Quantidade = 0;
    this.EventoId = 0;
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

  public get preco(): number {
    return this.Preco;
  }
  public set preco(value: number) {
    this.Preco = value;
  }

  public get dataInicio(): Date | undefined {
    return this.DataInicio;
  }
  public set dataInicio(value: Date | undefined) {
    this.DataInicio = value;
  }

  public get dataFim(): Date | undefined {
    return this.DataFim;
  }
  public set dataFim(value: Date | undefined) {
    this.DataFim = value;
  }

  public get quantidade(): number {
    return this.Quantidade;
  }
  public set quantidade(value: number) {
    this.Quantidade = value;
  }

  public get eventoId(): number {
    return this.EventoId;
  }
  public set eventoId(value: number) {
    this.EventoId = value;
  }
}
