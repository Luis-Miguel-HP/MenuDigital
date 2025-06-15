import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionOrdenaComponent } from './navegacion-ordena.component';

describe('NavegacionOrdenaComponent', () => {
  let component: NavegacionOrdenaComponent;
  let fixture: ComponentFixture<NavegacionOrdenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionOrdenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionOrdenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
