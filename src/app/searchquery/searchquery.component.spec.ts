import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchqueryComponent } from './searchquery.component';

describe('SearchqueryComponent', () => {
  let component: SearchqueryComponent;
  let fixture: ComponentFixture<SearchqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
