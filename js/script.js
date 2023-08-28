

const urlDefault = 'https://viacep.com.br/ws/';
const cep = document.getElementById('cep');
const searchCep = document.getElementById('search');
const resultContainer = document.getElementById('result');

searchCep.addEventListener('click', function () {
    const valueSearch = cep.value.trim();
    const url = `${urlDefault}${valueSearch}/json`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const resultText = `
            <b>CEP</b>: ${data.cep}<br>
            <b>Logradouro</b>: ${data.logradouro}<br>
            <b>Bairro</b>: ${data.bairro}<br>
            <b>Cidade</b>: ${data.localidade}<br>
            <b>Estado</b>: ${data.uf}
            `;

            resultContainer.innerHTML = resultText;

        })
        .catch(error => {
            console.log(error);
            resultContainer.innerHTML = '<h4>CEP não encontrato, pesquise novamente!</h4>';
        });
});

