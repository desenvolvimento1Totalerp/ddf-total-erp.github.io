export class DocumentosFiscais {
  autorizados: number;
  cancelados: number;
  digitacao: number;
  encerrados: number;
  envio: number;
  rejeitado: number;
  total: number;
  ultimoDoc: string;
}

export class Quartz {
  status: number;
  quantidadeTarefa: number;
}

export class UsuarioDTO {
  sessoesAtivas: number;
  sessoesCriadas: number;
}

export class StatActivityDTO {
  pid: number;
  client: string;
  appName: string;
  inicioTransacao: string;
  inicioQuery: string;
  total: number;
}
