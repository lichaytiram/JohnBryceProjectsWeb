import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTotalPagesComponent } from './show-total-pages.component';

describe('ShowTotalPagesComponent', () => {
  let component: ShowTotalPagesComponent;
  let fixture: ComponentFixture<ShowTotalPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTotalPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTotalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
