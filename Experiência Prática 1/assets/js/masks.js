// Função de máscara genérica
function aplicarMascara(input, mascara) {
    input.addEventListener("input", () => {
        let i = 0;
        const valor = input.value.replace(/\D/g, "");
        input.value = mascara.replace(/#/g, () => valor[i++] || "");
    });
}

// Máscara CPF
const cpf = document.getElementById("cpf");
if (cpf) aplicarMascara(cpf, "###.###.###-##");

// Máscara Telefone
const telefone = document.getElementById("telefone");
if (telefone) aplicarMascara(telefone, "(##) #####-####");

// Máscara CEP
const cep = document.getElementById("cep");
if (cep) aplicarMascara(cep, "#####-###");
