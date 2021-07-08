import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GasMeterComponent } from './gas-meter.component';

describe('GasMeterComponent', () => {
  let component: GasMeterComponent;
  let fixture: ComponentFixture<GasMeterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GasMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
