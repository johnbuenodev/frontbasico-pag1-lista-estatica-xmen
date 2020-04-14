import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nome :any = 'johnteste';

  status1 = true;
  status2 = false;
  //myValue;
  myValue = 3;
  clienteList = [{nome:"john", idade:22},
                 {nome:"alice", idade:25},
                 {nome:"Renato",idade:31},
                 {nome:"Bianca",idade:27}];
   //lista estatica para testar componente
  xmenList = [{nome:"Vampira",equipe:"bom",habilidade:"Drenar habilidade"},
              {nome:"Wolverine",equipe:"bom",habilidade:"Regeneração"},
              {nome:"Apocalipse",equipe:"mal",habilidade:"Mutante Ascestral"},
              {nome:"Bishop",equipe:"mal",habilidade:"Metamorfose"},
              {nome:"Emma Frost",equipe:"mal",habilidade:"Telepata"},
              {nome:"Tempestade",equipe:"bom",habilidade:"controlar o clima"}];

  selectedXmen = null;
  nomeXmen :string ="";

  xmenDadoVariavel : null;
  //getImageServer
  //get xmenDadospropertyBinding(){
    //const number = ('000' + this.selectedXmen.id).slice(-3);
    //const id = 1;
    //return `//endereco/prod/${id}.png ou jpg`;
  //  this.xmenDadoVariavel = this.selectedXmen.nome;
  //  return this.xmenDadoVariavel;
 
  //};

  constructor() { 

    this.nome = 'johnteste' + ' ' +'vai detonar no angular!';
  }


  ngOnInit(): void {
  }
  salvar(){
	  alert("Clicado!");
	  
  }
  selectXmen(xmen){
     console.log(xmen);

     this.selectedXmen = xmen.nome;
  }
}
