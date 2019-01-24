1 - HTML é uma linguagem de marcação.

2 - CSS é uma linguagem de estilização.

3 - Cite 3 tags HTML, e descreva suas funções.
<div> </div> - indica que uma divisão de conteúdo com relação ao restante da página deve ser inserida
<a> </a> - indica que um link de redirecionamento deve ser inserido na página, pode ser para um arquivo
interno ou outro destino fora da máquina do usuário
<label> </label> - indica que um "rótulo" ou identificação para um campo de <input> deve ser inserido 
na página, facilitando a sua identificação posterior.

4 - Aplique CSS no HTML a seguir <a href="http://google.com">Ir para o google</a>, de modo que:
A fonte seja arial, tamanho 32px, negrito
A cor do texto seja branca
A cor do fundo seja azul
O espaçamento interno seja 10px
Ao passar o mouse, a cor de fundo seja vermelho, com uma trasição sutil entre as cores

#linkGoogle {
  text-decoration: none;
  font-family: arial;
  font-weight: bold;
  font-size: 32px;
  color: white;
  background-color: blue;
  padding: 10px;
}
#linkGoogle:hover {
  background-color: red;
}

<a href="http://google.com" id="linkGoogle">Ir para o google</a>

5 - Vamos criar um site sobre você, o site deve ter 3 páginas:
HOME - Mostrando um resumo sobre você, algumas fotos e links para as redes sociais
Sobre - Mostrando um texto sobre você e algumas fotos
Contato - Um formulário com os campos: Nome, E-mail e Mensagem
Todas as páginas deve possuir links para as outras
O formulário não precisa funcionar, deve apenas existir os campos de textos

Site junto ao repositório onde este arquivo se encontra.