import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPerPageComponent } from './show-per-page.component';

describe('ShowPerPageComponent', () => {
  let component: ShowPerPageComponent;
  let fixture: ComponentFixture<ShowPerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
