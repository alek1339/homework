import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { PlayersService } from "../../../services/players.service";
import { Auth } from "../../../core/auth";
import { IPlayer } from "../../../models/players/player.model";
import { Player } from "../../../models/players/player";

@Component({
  selector: "app-edit-player",
  templateUrl: "./edit-player.component.html",
  styleUrls: ["./edit-player.component.css"]
})
export class EditPlayerComponent implements OnInit {
  constructor(public auth: Auth, public playersService: PlayersService) {}

  editForm: FormGroup;
  player: IPlayer = new Player();
  ngOnInit() {
    this.playersService.getById().subscribe(data => {
      this.player = new Player(data);
      console.log(data);
      this.editForm = new FormGroup({
        name: new FormControl(this.player.name, Validators.required),
        age: new FormControl(this.player.age, Validators.required),
        games: new FormControl(this.player.games, Validators.required),
        goals: new FormControl(this.player.goals, Validators.required),
        assists: new FormControl(this.player.assists, Validators.required),
        picture: new FormControl(this.player.picture)
      });
    });
  }
  onSubmit() {
    this.playersService.edit(this.editForm.value);
  }
}
