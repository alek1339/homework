import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IPlayer } from "../models/players/player.model";
import { Player } from "../models/players/player.model";

import { Router } from "@angular/router";

import { AppConf } from "../core/conf";

import alertify from "alertifyjs";

@Injectable({ providedIn: "root" })
export class PlayersService {
  constructor(public router: Router, private http: HttpClient) {}

  uri = AppConf.server + AppConf.api.players;

  private player: IPlayer = {
    name: "",
    age: 0,
    games: 0,
    goals: 0,
    assists: 0
  };

  getAll(): Observable<any> {
    return this.http.get(`${this.uri}/`);
  }

  getById() {
    return this.http.get(`${this.uri}/id`);
  }

  edit(player) {
    this.player = player;

    this.http.put(`${this.uri}/id`, this.player).subscribe(res => {
      alertify.success("Your edited player successfully!");
      // I have to find why this doesn't work
      this.router.navigate(["/players/all"]);
    });
    // this.router.navigate(["/players/all"]);
  }

  add(player) {
    this.player = player;
    console.log(this.player);
    this.http.post(`${this.uri}/add`, this.player).subscribe(res => {
      alertify.success("Your added player successfully!");
      this.router.navigate(["/players/all"]);
    });
  }
}
