import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon, PokemonService } from '../../core/pokemon.service';
import { PokemonStorageService } from '../../core/pokemon-storage.service';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css']
})
export class CapturaComponent implements OnInit {
   pokemon!: Pokemon;
  operaciones: { tipo: string; a: number; b: number }[] = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pokemonSrv: PokemonService,
    private pokemonStorageSrv: PokemonStorageService
  ) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonSrv.getPokemonAleatorio();
    this.operaciones = this.pokemonSrv.generarOperaciones();

    this.form = this.fb.group({
      r0: ['', [Validators.required]],
      r1: ['', [Validators.required]],
      r2: ['', [Validators.required]],
    });

  }
   enviar(): void {
    const esperados = this.operaciones.map(op => {

  switch(op.tipo){

    case 'suma':
      return op.a + op.b;

    case 'resta':
      return op.a - op.b;

    case 'multiplicacion':
      return op.a * op.b;

    default:
      return 0;
  }

});
    const respuestas = [0, 1, 2].map(i => Number(this.form.get('r' + i)?.value));

    const correcto = respuestas.every((v, i) => v === esperados[i]);

    if (correcto) {
      this.pokemonStorageSrv.addPokemon(this.pokemon);
      alert('Has atrapado al Pokémon');
    } else {
      alert('El Pokémon ha escapado');
    }

    this.router.navigateByUrl('/');
  }


}
