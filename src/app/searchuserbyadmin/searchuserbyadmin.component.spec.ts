import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchuserbyadminComponent } from './searchuserbyadmin.component';

describe('SearchuserbyadminComponent', () => {
  let component: SearchuserbyadminComponent;
  let fixture: ComponentFixture<SearchuserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchuserbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchuserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
