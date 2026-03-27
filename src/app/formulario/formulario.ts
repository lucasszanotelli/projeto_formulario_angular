import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type FichaMatricula = {
  nome: string;
  email: string;
  idade: number;
  senha: string;
  confirmarSenha: string;
  genero: string;
  cidade: string;
  termos: boolean;
  senhasConferidas: boolean;
};

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario {
  nome = '';
  email = '';
  idade: number | null = null;
  senha = '';
  confirmarSenha = '';
  genero = '';
  cidade = '';
  termos = false;
  senhasConferidas = false;

  fichaEnviada: FichaMatricula | null = null;

  get senhasConferem(): boolean {
    this.senhasConferidas = true;
    return this.senha.trim() !== '' && this.senha === this.confirmarSenha;
  }

  enviar(propForm: NgForm): void {
    if (propForm.invalid || !this.senhasConferem || this.idade === null) {
      return;
    }

    this.fichaEnviada = {
      nome: this.nome,
      email: this.email,
      idade: this.idade,
      senha: this.senha,
      confirmarSenha: this.confirmarSenha,
      genero: this.genero,
      cidade: this.cidade,
      termos: this.termos,
      senhasConferidas: this.senhasConferidas,
    };
  }

}
