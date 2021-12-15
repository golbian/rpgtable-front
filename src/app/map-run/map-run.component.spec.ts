import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRunComponent } from './map-run.component';

describe('MapRunComponent', () => {
  let component: MapRunComponent;
  let fixture: ComponentFixture<MapRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
