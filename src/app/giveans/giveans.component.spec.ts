import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveansComponent } from './giveans.component';

describe('GiveansComponent', () => {
  let component: GiveansComponent;
  let fixture: ComponentFixture<GiveansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
