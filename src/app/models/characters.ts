import { Sprite, Texture } from 'pixi.js'
export class Character {
    
    public name:string;
    public texture:Texture;
    public sprite:any;
    public owner:string;
    public x:number;
    public y:number;

    constructor(name:string, texture:string, owner:string, x:number, y:number) {
        this.name = name;
        this.texture = Texture.from(texture);
        this.sprite =  new Sprite(this.texture);
        this.owner = owner;
        this.x = x;
        this.y = y;
    }
}