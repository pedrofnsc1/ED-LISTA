import Questao3 from "../../src/lista2/Questao3";

let q;

beforeEach(() => {
    q = new Questao3();
});

test("Inserir, remover e verificar espera", () => {
    q.entrarCaminhao("Mercedes");
    q.entrarCaminhao("Volvo");
    q.entrarCaminhao("Wolkswagem");
    q.entrarCaminhao("GMC");
    q.entrarCaminhao("KIA");
    q.entrarCaminhao("VOLVO");
    expect(q.verificaCaminhoes()).toBe(6);
    q.dispensarCaminhao();
    q.dispensarCaminhao();
    q.dispensarCaminhao();
    expect(q.verificaCaminhoes()).toBe(3);
});

test("listar caminhoes do dia", () => {
    q.entrarCaminhao("Mercedes");
    q.entrarCaminhao("Volvo");
    q.entrarCaminhao("Wolkswagem");
    q.entrarCaminhao("GMC");
    q.entrarCaminhao("KIA");
    q.entrarCaminhao("VOLVO");
    q.entrarCaminhao("BMW");
    q.entrarCaminhao("MERCEDES");
    q.entrarCaminhao("SCANIA");
    q.entrarCaminhao("VOLVO");
    expect(q.listaCaminhoes()).toBe(
        "\n1 - Mercedes" +
        "\n2 - Volvo" +
        "\n3 - Wolkswagem" +
        "\n4 - GMC" +
        "\n5 - KIA" +
        "\n6 - VOLVO" +
        "\n7 - BMW" +
        "\n8 - MERCEDES" +
        "\n9 - SCANIA" +
        "\n10 - VOLVO");

});

test("verificar quantos carregamentos ja ocorreram", () => {
    q.entrarCaminhao("Mercedes");
    q.entrarCaminhao("Volvo");
    q.entrarCaminhao("Wolkswagem");
    q.entrarCaminhao("GMC");
    q.entrarCaminhao("KIA");
    q.entrarCaminhao("VOLVO");
    q.dispensarCaminhao();
    q.dispensarCaminhao();
    q.dispensarCaminhao();
    expect(q.verificaCarregamentos()).toBe(3);
});
