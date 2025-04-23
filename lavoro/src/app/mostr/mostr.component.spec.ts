import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrComponent } from './mostr.component';

describe('MostrComponent', () => {
  let component: MostrComponent;
  let fixture: ComponentFixture<MostrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
