import { IPlayer } from "./player.model";

export class Player implements IPlayer {
  name: string;
  games: number;
  goals: number;
  assists: number;
  age: number;
  picture?: string;

  constructor(player?) {
    player = player || {};
    this.name = player.name || null;
    this.age = player.age || null;
    this.games = player.games || null;
    this.goals = player.goals || null;
    this.assists = player.assists || null;
    this.picture = player.picture || null;
  }
}
