import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletuserbyadminComponent } from './deletuserbyadmin.component';

describe('DeletuserbyadminComponent', () => {
  let component: DeletuserbyadminComponent;
  let fixture: ComponentFixture<DeletuserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletuserbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletuserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
