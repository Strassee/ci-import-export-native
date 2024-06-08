import Character from './domain.js';

export default class Game {
    start() {
      const hero = new Character();
      console.log('game started,', `life = ${hero.life},`, `armor = ${hero.armor}.`);
    }
  }

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}