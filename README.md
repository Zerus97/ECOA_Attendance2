-Instalação do ECOA_Attendance


docker run --rm --name mongo -p 27017:27017 -v /Users/rodnei/dev/workspaces/les/data/vimeoDB:/data/db -v /Users/rodnei/dev/workspaces/les/tmp:/tmp/workspace mvertes/alpine-mongo


> Dependencias: git , [Node.js v10^ e npm], [docker e docker-compose], [express, sequelize, pg]

# Passo inicial:

## Instalando as dependências:

### Passo 1:  Node.js

Antes de tudo, é necessário instalar o [NodeJS](https://nodejs.org/en/)

É recomendado usar o [Node Version Manager](https://github.com/creationix/nvm) para gerenciar as versões instaladas do node.  

Após a instalação do Node, é necessário instalar o _Sequelize CLI_

###  Passo 2: Sequelize cli

```
$ npm install -g sequelize-cli
```

###  Passo 3: pg
```
$ npm install -g pg
```

## Pegando o projeto

1. De clone no projeto:

OBS.: Caso ja tenha feito isso para rodar o frontend, pode-se pular essa parte

**https:**

```
$ git clone https://poseidon.les.inf.puc-rio.br/rodnei/capsula.git
```



**ssh:**

```
$ git clone git@poseidon.les.inf.puc-rio.br:rodnei/capsula.git
```


## Instalando dependências do projeto backend

Após baixar o projeto, dentro da pasta backend, rode:

```
$ npm install
```

## PostgreSQL SQL:

É necessário estar com o PostgresSQL instalado na máquina. Recomendamos o uso do [Docker](https://www.docker.com/) para facilitar esse processo: 

### PostgresSQL com Docker

É necessário ter instalado o Docker e Docker Compose em sua máquina.

#### Passo 1: Instalação do Docker:

É necessário ter instalado a versão do _Docker_ igual ou posterior a __18.03.1-ce__. Caso tenha uma versão anterior, garanta o _upgrade_ para a versão mais nova.

>[Link para documentação da instalação no Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1)

#### Passo 2:  Instalação do Docker Compose:

É necessário ter instalado a versão do _Docker Compose_ igual ou posterior a __1.18.0__. Caso tenha uma versão anterior, garanta o _upgrade_ para a versão mais nova.

__ATENCAO:__ Não instale usando o comando `apt-get`, pois será instalada uma versão anterior e incompatível do _Docker Compose_. 

>[Link para documentação da instalação no Ubuntu](https://docs.docker.com/compose/install/)

## Rodando o PostgreSQL via docker-compose e preparando o banco:

1. Verifique na pasta raiz do projeto se existe a pasta postgreSQL-docker e dentro dela o arquivo docker-compose.yml

2. Para inicializar o postgreSQL vá até a pasta do arquivo .yml e rode o comando: 

```
$ docker-compose up
```

3. Deixe o terminal rodando o comando e verifique se ele está acessível
  * Vá até o [link](http://localhost:8080) para verificar se o pgAdmin está acessível
  * login:admin senha:1234
4. Logado no pgAdmin, é necessário criar o banco com o nome "forum"
  1. No canto superior esquerdo existe o campo "Browser", nele deve conter o item "Servers", clique no item com o botão direito, vá em "Create", em seguida clique com o esquerdo em "Server.."
  2. Na caixa de dialog que abrir, coloque o nome **capsula** no campo "Name" da aba "General"
  3. Vá até a aba "Connection" e coloque no campo "Host name": **postgres**, em "Username": **postgres** e "Password": **123456** . Clique em salvar.
  4. Agora deve aparecer em "Servers" o nome "forum", abra o campo "postgres" e clique com o direito em "Databases" >> "Create" >> "Database..". Na caixa de dialogo, nomeie o banco como **capsula**

>Para interromper o banco, basta matar o processo do terminal em que o docker-compose está rodando.
>É possivel colocar o banco para rodar "detached" a partir do comando ( na pasta do arquivo .yml):
>   ``` $ docker-compose up -d  ```
> para matar: 
>   ``` $ docker-compose stop  ```

## Após tudo isso:
Com o banco rodando e dentro da pasta do projeto rode o comando:

```
$ npm run serve
```

# Rodando em produção

O servidor não precisa ser compilado. Primeiro passo é copiar o código do servidor para a máquina de produção. Esta máquina deve ter NODE instalado. 

Um processo NODE morre caso uma execessão inesperada ocorra. Para evitar que o servidor caia desavisadamente, usamos o [Forever](https://github.com/foreversd/forever#readme), que mantém ele vivo caso isso ocorra.

Instale o forever

```
npm install forever -g 
```
Com o forever instalado, na raiz do projeto, execute:

```
export NODE_ENV=production; 
export STORAGE_PATH=/root/capsula/filesUploaded/; 
export PORT=3006;

forever start -o server.log -e server.log  capsula/backend/bin/www

```

Onde:
* __NODE_ENV__ é a variável de ambiente que define o modo produção para o servidor. 
* __STORAGE_PATH__ é a variável de ambiente que configura onde os arquivos de mídias das folhas da cápsulas serão instalados
* __PORT__ é a porta que o serviço irá rodar. 
* __server.log__, na linha de execução do forever,  é o arquivo de log do processo. 
* __capsula/capsula/backend/bin/www__ é o arquivo "main" do projeto, e capsula é a raiz do repositório baixado do git. 

O arquivo capsula/config/config.json deve ser alterado para refletir os dados do ambiente de produção do banco de dados postgres. 



