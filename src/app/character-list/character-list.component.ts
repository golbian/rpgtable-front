import { Component, OnInit } from '@angular/core';
import { Character } from '../models/characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  public characters: any[];
  constructor() {
    this.characters = [
      {
        name: 'xel',
        details: 'un xelor',
        owner: 'golbian',
        path: '../assets/xel.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
