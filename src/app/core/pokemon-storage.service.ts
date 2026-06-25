import { Injectable } from '@angular/core';

export interface PokemonEntry {
  nombre: string;
  img: string; // ruta de la imagen local
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  private key = 'pokedex';

  constructor() {}

  getPokemons(): PokemonEntry[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addPokemon(pokemon: PokemonEntry): void {
    const pokedex = this.getPokemons();
    pokedex.push(pokemon);
    localStorage.setItem(this.key, JSON.stringify(pokedex));
  }
}