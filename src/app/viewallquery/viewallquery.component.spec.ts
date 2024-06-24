import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallqueryComponent } from './viewallquery.component';

describe('ViewallqueryComponent', () => {
  let component: ViewallqueryComponent;
  let fixture: ComponentFixture<ViewallqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
