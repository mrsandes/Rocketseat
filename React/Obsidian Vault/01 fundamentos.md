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

Component: Header


