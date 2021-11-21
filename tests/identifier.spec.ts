import Identifier from "../identifier";

const identifier = new Identifier();

const ENTRADA_INVALIDA = false;
const ENTRADA_VALIDA = true;

describe("Teste identifier - Silly Pascal", () => {
  it("Valores válidos - tem no mínimo 1 caracter e é letra", () => {
    const result = identifier.validateIdentifier("a");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - tem 2 caracteres e primeiro é letra", () => {
    const result = identifier.validateIdentifier("a1");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - tem 3 caracteres e primeiro é letra", () => {
    const result = identifier.validateIdentifier("a12");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - tem 5 caracteres e primeiro é letra", () => {
    const result = identifier.validateIdentifier("a1234");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - tem no máximo 6 caracteres e primeiro é letra", () => {
    const result = identifier.validateIdentifier("a12345");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores inválidos - não tem no mínimo 1 caracter", () => {
    const result = identifier.validateIdentifier("");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores inválidos - tem no mínimo 1 caracter mas não é letra", () => {
    const result = identifier.validateIdentifier("1");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores inválidos - tem 7 caracteres", () => {
    const result = identifier.validateIdentifier("a123456");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores inválidos - tem 10 caracteres", () => {
    const result = identifier.validateIdentifier("a123456789");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores válidos - inicia com letra e tem números", () => {
    const result = identifier.validateIdentifier("a12345");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - inicia com letra e tem letras", () => {
    const result = identifier.validateIdentifier("abcdef");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores válidos - inicia com letra e tem números e letras", () => {
    const result = identifier.validateIdentifier("a1c2e3");
    expect(result).toEqual(ENTRADA_VALIDA);
  });

  it("Valores inválidos - não inicia com letra", () => {
    const result = identifier.validateIdentifier("012345");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores inválidos - inicia com letra mas não tem apenas letras e números", () => {
    const result = identifier.validateIdentifier("a1234$");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });

  it("Valores inválidos - inicia com letra mas tem apenas caracteres especiais", () => {
    const result = identifier.validateIdentifier("a@%$;?");
    expect(result).toEqual(ENTRADA_INVALIDA);
  });
});
