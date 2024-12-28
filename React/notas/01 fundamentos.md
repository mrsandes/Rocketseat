### Rendering Patterns

- SPA (Single Page Application)
	AngularJS, Vue, React, Svetle, Aurelia
	Back-end não é responsável pela construção visual da tela
	Retorna os dados em JSON (JavaScript Object Notation)
	Mais de uma aplicação: front e back
	Possibilidade de múltiplos fronts: Web, Mobile

- SSR (Server Side Render)
	Wordpress, Ruby & Rails (Github), Magento 

- Compilers
	Convertem o código de um formato para outro
	Downgrade de versão
	Babel: JavaScript compiler

- Bundlers
	webpack, Vite, Snowpack: converte vários arquivos em 1 único
	Útil no caso do navegador não ser compatível com importação de múltiplos arquivos
	Vite tem um compilador interno

### React

DOM (Document Object Model): representação do html através do JavaScript
JavaScript que constrói a aplicação por completo

npm create vite@latest
npm run dev
obs: na pasta do projeto

O react renderiza a tela a partir do main:
![[Pasted image 20241225185852.png]]
O main faz a busca de um id root dentro do index:
![[Pasted image 20241225185949.png]]
E insere por meio da função render (renderiza os componentes na tela) o App (função que retorna html) que foi importado:
![[Pasted image 20241225190027.png]]
E o App contém o html que vai ser retornado.

JSX = JavaScript + XML
#### Default Exports vs Named Exports

Default: Pode dar nome na importação
![[Pasted image 20241225190927.png]]

Named: Nome na exportação
![[Pasted image 20241225191116.png]]
![[Pasted image 20241225191219.png]]
cntrl + espaço: aparece os itens disponíveis pra importação
![[Pasted image 20241225191305.png]]

#### Propriedades
Funcionam como parâmetros das funções criadas 
![[Pasted image 20241225192037.png]]
![[Pasted image 20241225192049.png]]
props é um objeto que recebe esses valores de forma dinâmica

Para visualizar:
![[Pasted image 20241225192351.png]]

#### CSS
As importações são feitas no JavaScript
![[Pasted image 20241225193826.png]]

Vite já usa CSS modules
CSS modules gera um hash para tornar cada classe única dentro de cada componente para que as classes não interfiram em outros locais da aplicação

Componentes devem ter a primeira letra Maiúscula 
![[Pasted image 20241225194249.png]]

class é className devido a class do própio JavaScript
![[Pasted image 20241225195221.png]]

Adição da importação automaticamente 
![[Pasted image 20241225194717.png]]

-webkit-font-smoothing: antialiased: padroniza as fontes para ficarem mais bonitas?

npm i phosphor-react
https://phosphoricons.com/

interações com foreach não tem retorno
com map tem retorno
![[Pasted image 20241226150822.png]]

npm i date-fns
https://date-fns.org/v4.1.0/docs/format

useState retorna um array numerico e uma função que altera o array orginal e avisa para a aplicação que o array teve alteração, sendo possível atualizar a tela e mostrar os novos valores que foram adicionados 
![[Pasted image 20241226155051.png]]

... spread operator: le os valores existentes e copia
![[Pasted image 20241226155011.png]]

![[Pasted image 20241226161539.png]]

key permite que o React identifique o item ao longo de sua vida útil, deve ser semelhante a um id, imutável após a criação e único por item, usado no map. Evita renderizar itens repetidamente. Não se pode usar o index do array pelo fato de eventuais trocas de posições fazem com que o react renderize todo o componente sem necessidade. Com uma key especifica isso não ocorre.
![[Pasted image 20241227105248.png]]

react developer tools

É possível passar funções por propriedade através dos componentes

onclick espera uma função 
![[Pasted image 20241227113523.png]]
da erro pois é uma execução de uma função
![[Pasted image 20241227113612.png]]
com arrow function se torna uma função

![[Pasted image 20241227114509.png]]
aumenta de 1 em 1

![[Pasted image 20241227114635.png]]
usa o valor antigo e aumenta de 1 em 1

![[Pasted image 20241227114934.png]]
aumenta de 2 em 2
usando uma função o state acessa o valor mais recente de likeCount, criando uma fila de atualizações

![[Pasted image 20241227115619.png]]

javaScript permite mudar o tipo das variáveis no decorrer do código

const constante
let let it change 

![[Pasted image 20241227173325.png]]

![[Pasted image 20241227175314.png]]
! garante que algo vai acontecer: root pode n existir

![[Pasted image 20241227182923.png]]
...props
ImgHTMLAttributes permitem usar os atriburos de qualquer tag html dentro do ts