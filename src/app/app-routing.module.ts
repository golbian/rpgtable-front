import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { AddMapComponent } from './add-map/add-map.component';
import { MapRunComponent } from './map-run/map-run.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { AddTableComponent } from './add-table/add-table.component';
import { PIXIComponent } from './pixi/pixi.component';

const routes: Routes = [
  { path: 'characters', component:  CharacterListComponent},
  { path: 'characters/new', component:  AddCharacterComponent},
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'pixi', component:  PIXIComponent},
  { path: 'maps', component:  MapListComponent},
  { path: 'maps/new', component:  AddMapComponent},
  { path: 'maps/edit/:id', component: MapEditorComponent },
  { path: 'maps/run/:id', component: MapRunComponent },
  { path: 'tables', component:  TableListComponent},
  { path: 'tables/new', component:  AddTableComponent},
  { path: 'tables/:id', component: TableDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
