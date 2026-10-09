(function () {
  "use strict";

  function somenteDigitos(valor) {
    return valor.replace(/\D/g, "");
  }

  function mascaraCpf(valor) {
    var v = somenteDigitos(valor).slice(0, 11);
    v = v.replace(/^(\d{3})(\d)/, "$1.$2");
    v = v.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return v;
  }

  function mascaraTelefone(valor) {
    var v = somenteDigitos(valor).slice(0, 11);
    if (v.length > 10) {
      return v.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    }
    if (v.length > 6) {
      return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    }
    if (v.length > 2) {
      return v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    }
    return v.replace(/^(\d*)/, "($1");
  }

  function mascaraCep(valor) {
    var v = somenteDigitos(valor).slice(0, 8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  var mascaras = {
    cpf: mascaraCpf,
    telefone: mascaraTelefone,
    cep: mascaraCep
  };

  document.querySelectorAll("[data-mascara]").forEach(function (campo) {
    var funcao = mascaras[campo.dataset.mascara];
    if (!funcao) { return; }
    campo.addEventListener("input", function () {
      campo.value = funcao(campo.value);
    });
  });

  var nascimento = document.getElementById("nascimento");
  if (nascimento) {
    nascimento.max = new Date().toISOString().split("T")[0];
  }

  var form = document.getElementById("form-cadastro");
  if (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var aviso = document.getElementById("aviso-sucesso");
      aviso.hidden = false;
      aviso.focus();
      form.reset();
    });
  }
})();
