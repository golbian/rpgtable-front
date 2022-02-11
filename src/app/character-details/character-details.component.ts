import { Component, OnInit } from '@angular/core';
import { Character } from '../models/characters';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  public character:Character;
  constructor() {
    let content = {
      name: "prout prout",
      details: "A little cute companion who does'n't even know how to attack, he can't neither make the difference between an ennemy or a comrade nor grab something with his tiny legs. His only quality is his cuteness.",
      texture: "https://i.ytimg.com/vi/dBpOCditrv4/mqdefault.jpg",
      owner: "gaëtane"
    }
    this.character = new Character(content.name, content.details, content.texture ,content.owner);
  }

  ngOnInit(): void {
  }

}
