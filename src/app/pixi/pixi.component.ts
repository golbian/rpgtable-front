import {
  OnInit,
  Component,
  ElementRef,
  Input,
  HostListener,
  NgZone,
  OnDestroy,
} from '@angular/core';
import {
  Application,
  Container,
  Loader,
  LoaderResource,
  Sprite,
  Texture,
} from 'pixi.js';
import PixiApngAndGif from 'pixi-apngandgif';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../models/characters';
import { ShutterstockService } from '../services/shutterstock.service';

@Component({
  selector: 'app-pixi',
  template: '',
})
export class PIXIComponent implements OnInit, OnDestroy {
  public app: Application;
  public container: Container;
  loader: Loader;
  loadOption = {
    loadType: LoaderResource.LOAD_TYPE.XHR,
    xhrType: LoaderResource.XHR_RESPONSE_TYPE.BUFFER,
    crossOrigin: '',
  };
  gif =
    'https://media1.giphy.com/media/46hpy8xB3MiHfruixn/giphy-downsized-large.gif';

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private characterService: CharacterService,
    private shutterstockService: ShutterstockService
  ) {
    this.app = new Application({
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });
    this.container = new Container();
    this.app.stage.addChild(this.container);
    this.loader = Loader.shared;
    this.characterService;
    this.shutterstockService;
  }

  init() {
    this.shutterstockService.getSprites().subscribe((res) => {
      console.log(res);
    });
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application();
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.loader.add(
      'https://media1.giphy.com/media/46hpy8xB3MiHfruixn/giphy-downsized-large.gif',
      this.loadOption
    );
    this.loader.add(
      'https://img1.picmix.com/output/stamp/normal/2/6/0/2/982062_c8ccb.gif',
      this.loadOption
    );
    // this.loader.add("fire", "https://www.icegif.com/wp-content/uploads/hola-icegif-23.gif", this.loadOption);
    this.loader.load((progress, resources) => {
      this.addGif(
        'https://media1.giphy.com/media/46hpy8xB3MiHfruixn/giphy-downsized-large.gif',
        resources
      );
      // this.addGif("https://img1.picmix.com/output/stamp/normal/2/6/0/2/982062_c8ccb.gif", resources);
    });
    // this.resize();
  }

  addGif(url: string, resources) {
    var gif = new PixiApngAndGif(url, resources);
    let sprite = gif.sprite;
    this.setInteractive(sprite);
    this.container.addChildAt(sprite, 0);
  }

  addPng(url: string) {
    let texture = Texture.from(url);
    let sprite = new Sprite(texture);
    this.setInteractive(sprite);
    this.container.addChild(sprite);
  }

  addCharacter(
    name: string,
    details: string,
    owner: string,
    path: string,
    texture: string = ''
  ) {
    let x = Math.floor(Math.random() * this.app.screen.width);
    let y = Math.floor(Math.random() * this.app.screen.height);
    let character = new Character(name, details, path, owner, texture, x, y);
    let sprite = character.sprite;
    // TODO owner rights with currentUser === owner
    this.setInteractive(sprite);
    this.container.addChild(sprite);
  }

  setInteractive(sprite) {
    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite
      .on('pointerdown', (event: PIXI.InteractionEvent) => {
        sprite.data = event.data;
        sprite.alpha = 0.5;
        sprite.dragging = true;
      })
      .on('pointerup', () => {
        sprite.alpha = 1;
        sprite.dragging = false;
        sprite.data = null;
      })
      .on('pointerupoutside', () => {
        sprite.alpha = 1;
        sprite.dragging = false;
        sprite.data = null;
      })
      .on('pointermove', () => {
        if (sprite.dragging) {
          const newPosition = sprite.data.getLocalPosition(sprite.parent);
          sprite.x = newPosition.x;
          sprite.y = newPosition.y;
        }
      });
    sprite.anchor.set(0.5);
  }

  addBackground(texture: string) {}

  ngOnInit(): void {
    this.init();

    this.app.stage.addChild(this.container);

    this.addCharacter(
      'xelor',
      'un xelor tout simplement',
      '../../assets/xel.jpg',
      '',
      'golbian'
    );
    // this.addPng("https://cdn.wallpapersafari.com/78/42/Ml4JTE.jpg");

    // Move container to the center
    this.container.x = this.app.screen.width / 2;
    this.container.y = this.app.screen.height / 2;
  }

  // @HostListener('window:resize')
  // public resize() {
  //   const width = this.elementRef.nativeElement.offsetWidth;
  //   const height = this.elementRef.nativeElement.offsetHeight;
  //   const viewportScale = 1 / this.devicePixelRatio;
  //   this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
  //   this.app.view.style.transform = `scale(${viewportScale})`;
  //   this.app.view.style.transformOrigin = `top left`;
  // }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
