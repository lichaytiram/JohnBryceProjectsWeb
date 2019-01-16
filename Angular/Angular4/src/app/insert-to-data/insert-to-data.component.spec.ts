import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertToDataComponent } from './insert-to-data.component';

describe('InsertToDataComponent', () => {
  let component: InsertToDataComponent;
  let fixture: ComponentFixture<InsertToDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertToDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertToDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
