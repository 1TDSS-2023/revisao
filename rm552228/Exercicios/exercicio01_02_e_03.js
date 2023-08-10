funcionarios = [
     {Nome: "Carlos", salario: 2200},
     {Nome: "Tobias", salario: 2300},
     {Nome: "Matias", salario: 2000},
     {Nome: "Carla", salario: 1900},
     {Nome: "Manuela", salario: 1400},
     {Nome: "Felipe", salario: 2840},
     {Nome: "Yan", salario: 2630},
     {Nome: "Stefani", salario: 2000},
     {Nome: "Thais", salario: 2800},
     {Nome: "Fernanda", salario: 3030}
]

console.log(funcionarios);
// Utilizando Map()
     const salarioPessoas = funcionarios.map(funcionarios => funcionarios.salario < 2000 ? funcionarios.salario * 1.1 : funcionarios.salario * 1.15);
     console.log(salarioPessoas);

//Utilizando Filter() 
     const salarioMaior = salarioPessoas.filter(salario => salario > 2500);
     console.log(salarioMaior);


//Utilizando reduce()     
     const somaSalarios = salarioMaior.reduce((salarioAntigo, salarioNovo) => salarioAntigo + salarioNovo);
     console.log(somaSalarios);