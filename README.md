# Companies Solution

Aplicação feita com o propósito de ranquear empresas com base na quantidade de notas ficas emitidas e dependências financeiras.

## Tecnologias utilizadas

**Frontend**: 
 - ReactJS, com react-router-dom, react-icons e styled-components;
 - Axios;

**Backend**: 
 - Laravel Lumen (PHP);
 - PHPUnit (testes unitários);
 
**Banco de dados**: 
 - MySQL;
 
**Ferramentas de desenvolvimento**:

 - Visual Studio Code;
 - PhpStorm;
 - HeidiSQL;
 - Postman;

## Setup da aplicação

Para instalar as dependências e rodar o frontend, você vai precisar de algum gerenciador de pacotes (yarn, npm, etc). Nesse caso iremos utilizar o npm.

Depois de clonar/baixar o projeto, acesse a pasta da aplicação e abra o terminal. Dentro da pasta ***frontend***, iremos instalar as dependências utilizando o seguinte comando:

`$ npm install`

Depois de baixar todas as dependências (pode demorar um pouco), iremos iniciar o frontend da seguinte forma:

`$ npm start`

Pronto, depois de alguns segundos a página da aplicação abrirá automaticamente no seu navegador. Podemos notar que não há nenhum dado sendo carregado, isso por que ainda precisamos rodar a API, para o frontend conseguir receber os dados.

Para o servidor do banco de dados, podemos utilizar o XAMPP. Caso você não tenha, baixe-o e inicie o sevidor MySQL. Para ver como utilizar o XAMPP, [clique aqui.](http://linguagemprisma.br4.biz/blog/configurando-mysql-xampp-em-windows/) Caso não tenha conseguido através desse link, existem diversos tutoriais no google de como iniciar um servidor MySQL.

É claro que utilizar o XAMPP é só uma opção, você pode iniciar o servidor do banco de dados da maneira que achar melhor.

Agora vamos iniciar um servidor para rodar o PHP. Antes de tudo você deve ter o PHP instalado e configurado nas variáveis de ambiente, para ver como fazer isso, [clique aqui](https://medium.com/@marcos.paegle/php-moderno-como-utilizar-o-php-7-1-de-maneira-f%C3%A1cil-e-r%C3%A1pida-windows-286ff668cce8#:~:text=Aperte%20a%20tecla%20Windows%20%2B%20Pause,o%20%E2%80%9CC%3A%5Cphp%E2%80%9D.).

Depois de fazer isso, utilize o comando `$ php -v` para conferir se a instalação não teve nenhum problema. O retorno do comando acima deve ser algo como:

    PHP 7.4.0 (cli) (built: May 20 2020 20:20:20)
    Copyright (c) 1997-2012 The PHP Group
    Zend Engine v2.4.0, Copyright (c) 1998-2012 Zend Technologies

Caso tenha retornado algo muito diferente disso, revise os passos anteriores e tente novamente.

Agora, entre na pasta ***backend***. Precisamos digitar alguns comandos para subir o banco de dados e iniciar o servidor.

Para criar a database, vamos utilizar:
`$ php artisan make:database api`

Para realizar as migrations, isto é, criar as tabelas do banco de dados, iremos digitar:
`$ php artisan migrate`

Por último, vamos iniciar o servidor com o seguinte comando:
`$ php -S localhost:8000 -t public`

> Observação: o frontend está configurado para consumir a API na porta 8000, caso você não consiga utilizar essa porta, você deve configurar o arquivo **frontend/src/services/api.js** com a porta escolhida.
> 
> Observação²: caso você não consiga levantar o banco de dados, ou ocorrer algum problema, utilize o dump que está na pasta **additional**, ele irá gerar a database e as tabelas necessárias.



Para testar se a API está funcionando corretamente, acesse **localhost:8000/api/companies** e confira o retorno da página. Caso retorne um  array vazio, está tudo funcionando corretamente. Caso contŕario, revise os passos anteriores, e se precisar, use o google.



## Interface e funcionalidades da aplicação

Na tela inicial, temos o ranking das empresas cadastradas. As empresas estão ordenadas pelo *score*, em ordem decrescente. Também existe um campo responsável por criar novas empresas.

![tela inicial](https://user-images.githubusercontent.com/38995753/84848785-2f7c1f00-b02a-11ea-9778-bf66822140ec.png)

Para visualizar os detalhes de cada empresa ou cadastrar novos débitos/notas, devemos clicar no ícone que está na última coluna da tabela.

![tabela](https://user-images.githubusercontent.com/38995753/84848788-32770f80-b02a-11ea-8ecc-e37ae87ab54f.png)

Nesta tela, estão todas as informações da empresa, como nome, score e as declarações realizadas.

![detalhes](https://user-images.githubusercontent.com/38995753/84848613-df04c180-b029-11ea-933c-21e57c05e123.png)

Para inserir novas dependências financeiras e notas fiscais, podemos clicar em ***escolha um arquivo*** e selecionar algum arquivo em formato CSV.

Para testar essa funcionalidade, disponibilizei alguns arquivos na pasta ***additional***, que está na raiz do projeto. Depois de escolher o arquivo, clique em ***salvar*** para enviar os dados e o cálculo do novo score ser realizado.

## API

### Company
**GET**

`/api/companies`
*Retorna os dados de todas as empresas existentes*

`/api/company/{id}`
*Retorna os dados da empresa que tem o **id** passado como parâmetro*

**POST**

`/api/company`
*É responsável por criar um novo registro, tem como retorno a empresa criada*

### Declaration

**GET**

`/api/declarations/{id}`
*Retorna todas as declarações de notas e débitos de uma empresa específica. O parâmetro **id** é utilizado para buscar a empresa desejada, sendo esse a chave primária da tabela **companies***

**POST**

`/api/declarations`
*Este endpoint tem a finalidade de registrar as declarações de débito e notas fiscais, assim realizando o cálculo do novo score da empresa, com base na quantidade notas e débitos. Deve ser enviado um arquivo CSV*

O arquivo CSV precisa ter o seguinte formato:

    date,type,company_id
    2020-01-01,1,1
    
O campo **date** é responsável por informar a data em que ocorreu tal declaração. Esse campo tem o intuito de organizar e diferenciar as declarações que foram feitas. Não é único, podendo haver diversas declarações da mesma empresa, na mesma data.

O campo **company_id** é responsável por informar à qual empresa tal declaração pertence.

O campo **type** é responsável por informar o tipo da declaração, sendo **0 para nota fiscal** e **1 para dependência financeira**. 

O arquivo CSV pode conter infinitos registros, de empresas, tipos e datas diferentes.

Outro exemplo de um arquivo de importação de declarações:

    date,company_id,type
    2020-05-05,1,0
    2020-05-05,1,1
	2020-06-12,2,1
	2020-07-03,2,0
	2020-03-01,3,1

> Lembrando que existem arquivos CSV disponíveis na pasta **additional**, que fica na raiz do projeto.

## Testes unitários

Para realizar os testes unitários, você deve estar na pasta backend e usar os seguintes comandos:

### Company

Criar empresa:
> phpunit --filter test_should_create_company ../../tests/CompanyTest.php

Listar todas as empresas:
> phpunit --filter test_should_return_all_companies ../../tests/CompanyTest.php

Listar empresa por ID:
> phpunit --filter test_should_return_company ../../tests/CompanyTest.php

### Declaration

Listar declarações por ID da empresa:
> phpunit --filter test_should_return_all_declarations_by_company_id ../../tests/DeclarationTest.php
