import { Injectable } from '@angular/core';
export interface Pokemon {
  nombre: string;
  img: string; // ruta en assets
}


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 private pokemons: Pokemon[] = [
    { nombre: 'Bulbasaur',  img: 'assets/pokemon/bulbausaur.png' },
    { nombre: 'Charmander', img: 'assets/pokemon/charmander.png' },
    { nombre: 'Squirtle',   img: 'assets/pokemon/squirtle.png' },
    { nombre: 'Blastoise',   img: 'assets/pokemon/blastoise.png' },
    { nombre: 'Butterfree',   img: 'assets/pokemon/butterfree.png' },
    { nombre: 'Charizard',   img: 'assets/pokemon/charizard.png' },
    { nombre: 'Pikachu',   img: 'assets/pokemon/pikachu.png' },
    { nombre: 'Jigglypuff',   img: 'assets/pokemon/jigglypuf.png' },
    { nombre: 'Chibi',   img: 'assets/pokemon/chibi.png' },
    { nombre: 'Eevee',   img: 'assets/pokemon/eeve.png' },
    { nombre: 'Emolga',   img: 'assets/pokemon/emolga.png' },
    { nombre: 'Mewtwo',   img: 'assets/pokemon/metwo.png' },
    { nombre: 'Chikorita',   img: 'assets/pokemon/chikorita.png' },
    { nombre: 'Cyndaquil',   img: 'assets/pokemon/cyndaquil.png' },
    { nombre: 'Totodile',   img: 'assets/pokemon/totodile.png' },
    { nombre: 'Lugia',   img: 'assets/pokemon/lugia.png' },
    { nombre: 'Haunter',   img: 'assets/pokemon/gengar.png' },
    { nombre: 'Gengar',   img: 'assets/pokemon/gengar2.png' },
    { nombre: 'Latias',   img: 'assets/pokemon/latios.png' },
    { nombre: 'Geranita',   img: 'assets/pokemon/legendarynose.png' },
    { nombre: 'Litten',   img: 'assets/pokemon/litten.png' },
    { nombre: 'Lucario',   img: 'assets/pokemon/lucario.png' },
    { nombre: 'Mew',   img: 'assets/pokemon/mew.png' },
    { nombre: 'Mimiku',   img: 'assets/pokemon/mimiku.png' },
    { nombre: 'Pidgeot',   img: 'assets/pokemon/pajaro.png' },
    { nombre: 'Pichu',   img: 'assets/pokemon/pichu.png' },
    { nombre: 'Psyduck',   img: 'assets/pokemon/psyduck.png' },
    { nombre: 'PipLup',   img: 'assets/pokemon/piplup.png' },
    { nombre: 'Pok',   img: 'assets/pokemon/pok.png' },
    { nombre: 'Rayquazar',   img: 'assets/pokemon/rayquazar.png' },
    { nombre: 'Sceptile',   img: 'assets/pokemon/sceptile.png' },
    { nombre: 'Zapdos',   img: 'assets/pokemon/sparrow.png' },
    { nombre: 'Togepi',   img: 'assets/pokemon/togepi.png' },
    { nombre: 'Teddiursa',   img: 'assets/pokemon/teddiursa.png' },
    { nombre: 'Zorua',   img: 'assets/pokemon/zeraora.png' },
    { nombre: 'Umbreon',   img: 'assets/pokemon/umbreon.png' },
    { nombre: 'Wartortle',   img: 'assets/pokemon/wartortle.png' },
    { nombre: '?????',   img: 'assets/pokemon/nos10.png' },
    { nombre: 'Trecko',   img: 'assets/pokemon/nose.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose3.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose4.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose5.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose6.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose7.png' },
    { nombre: 'Articuno',   img: 'assets/pokemon/nose8.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose9.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose2.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose11.png' },
    { nombre: '?????',   img: 'assets/pokemon/nose12.png' },
    { nombre: 'Jolteon',   img: 'assets/pokemon/jolteon.png' },
    { nombre: 'Raichu',   img: 'assets/pokemon/raichu.png' },
    { nombre: 'Sylveon',   img: 'assets/pokemon/sylveon.png' },
    { nombre: 'MegaRayquazar',   img: 'assets/pokemon/megarayquazar.png' },
    { nombre: 'Ditto',   img: 'assets/pokemon/ditto.png' },
    { nombre: 'Clefairy',   img: 'assets/pokemon/cleafairy.png' },
    { nombre: 'Dragonite',   img: 'assets/pokemon/dragonite.png' },
    { nombre: 'Deonix',   img: 'assets/pokemon/deonix.png' },
    { nombre: 'Arceus',   img: 'assets/pokemon/Arceus.png' },
    { nombre: 'Nidoran',   img: 'assets/pokemon/nidoran.png' },
    { nombre: 'Glaceon',   img: 'assets/pokemon/glaceon.png' },
    { nombre: 'Onix',   img: 'assets/pokemon/onix.png' },
    { nombre: 'Kangaskhan',   img: 'assets/pokemon/kangaskhan.png' },
    { nombre: 'Flareon',   img: 'assets/pokemon/flareon.png' },
    { nombre: 'Persian',   img: 'assets/pokemon/persian.png' },
    { nombre: 'Snorlax',   img: 'assets/pokemon/snorlax.png' },
    { nombre: 'Primeape',   img: 'assets/pokemon/primeape.png' },
    { nombre: 'Meowth',   img: 'assets/pokemon/meowth.png' },
    { nombre: 'Speon',   img: 'assets/pokemon/speon.png' },
    { nombre: 'Mankey',   img: 'assets/pokemon/mankey.png' },
    { nombre: 'Nidorino',   img: 'assets/pokemon/nidorino.png' },
    { nombre: 'Nidokin',   img: 'assets/pokemon/nidokin.png' },
    { nombre: 'Palkia',   img: 'assets/pokemon/palkia.png' },
    { nombre: 'Vaporeon',   img: 'assets/pokemon/nose13.png' },
    { nombre: 'Luxio',   img: 'assets/pokemon/luxio.png' },
    { nombre: 'Shinx',   img: 'assets/pokemon/shinx.png' },
    { nombre: 'Dedenne',   img: 'assets/pokemon/dedenne.png' },
    { nombre: 'Pumpkaboo',   img: 'assets/pokemon/pumpkaboo.png' },
    { nombre: 'Braixen',   img: 'assets/pokemon/braixen.png' },
    { nombre: 'Furfrou',   img: 'assets/pokemon/furfrou.png' },
    { nombre: 'Porygon',   img: 'assets/pokemon/porygon.png' },
    { nombre: 'Pancham',   img: 'assets/pokemon/pancham.png' },
    { nombre: 'Dedenne',   img: 'assets/pokemon/dedenne.png' },
    { nombre: 'Moltres',   img: 'assets/pokemon/moltres.png' }

   
    // añade más si quieres
  ];
   getPokemonAleatorio(): Pokemon {
    const i = Math.floor(Math.random() * this.pokemons.length);
    return this.pokemons[i];
  }
   /** Genera N restas con a>b para que el resultado sea >=1 */
  generarRestas(n = 3, min = 5, max = 99): { a: number; b: number }[] {
    return Array.from({ length: n }).map(() => {
      const a = this.rand(min, max);
      const b = this.rand(1, a - 1);
      return { a, b };
    });
  }
   private rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
