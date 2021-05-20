import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  aumentarFonte(): void {
    this.tamanhoFonte = this.tamanhoFonte + 1;
  }

  diminuirFonte(): void {
    this.tamanhoFonte = this.tamanhoFonte - 1;
  }

  mudarAtivo(): void {
    this.ativo = !this.ativo;
  }
}
