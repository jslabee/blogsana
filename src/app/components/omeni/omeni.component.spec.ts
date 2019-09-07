import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeniComponent } from './omeni.component';

describe('OmeniComponent', () => {
  let component: OmeniComponent;
  let fixture: ComponentFixture<OmeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
