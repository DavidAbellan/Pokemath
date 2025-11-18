import { Component } from '@angular/core';
import {PokemonStorageService, PokemonEntry} from '../../core/pokemon-storage.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
   pokemons: PokemonEntry[] = [];

  constructor(private pokemonStorage: PokemonStorageService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonStorage.getPokemons();
  }
 

}
