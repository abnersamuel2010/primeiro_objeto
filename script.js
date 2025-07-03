function chama_aluno(){

    let aluno = {
        nome: 'Abner j Samuel',
        idade: 14,
        altura: 1.78,
        nota: 8.20
    };
    //alert( aluno.nome );

    document.getElementById('nome_aluno').textContent = 'Nome: ' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'Idade: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'Altura: ' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'Nota: ' + aluno.nota;
}
