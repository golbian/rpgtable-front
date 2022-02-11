import { Sprite, Texture } from 'pixi.js'
export class Character {
    
    public name:string;
    public details:string;
    public texture:Texture;
    public path:String;
    public sprite:any;
    public owner:string;
    public x:number;
    public y:number;

    constructor(name:string, details:string, path:string, owner:string, texture:string="", x:number=0, y:number=0) {
        this.name = name;
        this.details = details;
        this.texture = Texture.from(texture);
        this.path = path;
        this.sprite =  new Sprite(this.texture);
        this.owner = owner;
        this.x = x;
        this.y = y;
    }
}