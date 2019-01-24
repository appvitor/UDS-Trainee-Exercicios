<template>
  <div>
    <h1>Contador</h1>
    <h4>{{valor}}</h4>
    <div class="informacoesNumero">
      <h5>{{parOuImpar}}</h5>
      <h5>{{negativoOuPositivo}}</h5>
      <h5>{{numeroPrimo}}</h5>
    </div>
    <button @click="adicionarUnidade()">+</button>
    <input v-model="valorEmTexto">
    <button @click="diminuirUnidade()">-</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      valorEmTexto: '',
      valor: 0,
    };
  },
  methods: {
    adicionarUnidade() {
      this.valor += parseInt(this.valorEmTexto, 10);
    },
    diminuirUnidade() {
      this.valor -= parseInt(this.valorEmTexto, 10);
    },
  },
  computed: {
    parOuImpar() {
      if (this.valor > 0) {
        if (this.valor % 2 === 0) {
          return 'PAR';
        }
        return 'ÍMPAR';
      }
      return 'Inválido como Par ou Ímpar';
    },
    negativoOuPositivo() {
      if (this.valor !== 0) {
        if (this.valor < 0) {
          return 'NEGATIVO';
        }
        return 'POSITIVO';
      }
      return 'Valor Zerado';
    },
    numeroPrimo() {
      let quantidadeDivisores = 0;
      for (let i = 1; i <= this.valor; i += 1) {
        if (this.valor % i === 0) {
          quantidadeDivisores += 1;
        }
      }
      if (quantidadeDivisores === 2) {
        return 'PRIMO!';
      }
      return 'Não é Primo';
    },
  },
};
</script>

<style lang="css">
  .informacoesNumero {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
