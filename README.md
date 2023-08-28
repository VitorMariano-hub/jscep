# Buscar CEP

No script são definidos as seguintes constantes:

**urlDefault**: URL base para consulta do ViaCEP (https://viacep.com.br/ws/).  
**cep**: Representa um campo de entrada de texto onde o usuário pode inserir um CEP.  
**searchCep**: Representa um botão ou elemento que, quando clicado, realizara a pesquisa do CEP.  
**resultContainer**: Representa um elemento onde os resultados da pesquisa de CEP serão exibidos.  

* Definido um **ouvinte** de evento click = searchCep

* Em seguida, o código constrói a URL completa para a consulta ao serviço do ViaCEP, adicionando o valor do CEP à URL base.

* É feita uma chamada usando **fetch()** para a URL construída. O fetch() é usado para enviar uma solicitação HTTP GET para o serviço do ViaCEP.

* Verifica a resposta HTTP retornada pelo servidor usando .then(response => { ... }). Se a resposta não for bem-sucedida (por exemplo, erro 404), ele lança um erro.

* Se a resposta for bem-sucedida, o código converte a resposta em formato JSON usando response.json(). Os dados JSON são processados na próxima função .then(data => { ... }).

* Dentro da função .then(data => { ... }), os dados do CEP são usados para criar uma string de texto HTML que exibe informações detalhadas sobre o CEP, logradouro, bairro, cidade e estado.

![bears](https://i.postimg.cc/V6bHXGWB/Cep.png)
