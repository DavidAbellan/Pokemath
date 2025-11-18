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
  restas: { a: number; b: number }[] = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pokemonSrv: PokemonService,
    private pokemonStorageSrv: PokemonStorageService
  ) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonSrv.getPokemonAleatorio();
    this.restas = this.pokemonSrv.generarRestas(3, 5, 20);

    this.form = this.fb.group({
      r0: ['', [Validators.required]],
      r1: ['', [Validators.required]],
      r2: ['', [Validators.required]],
    });

  }
   enviar(): void {
    const esperados = this.restas.map(r => r.a - r.b);
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
