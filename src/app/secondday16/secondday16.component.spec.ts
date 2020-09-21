import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondday16Component } from './secondday16.component';

describe('Secondday16Component', () => {
  let component: Secondday16Component;
  let fixture: ComponentFixture<Secondday16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondday16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondday16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
