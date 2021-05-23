import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputHexComponent } from './output-hex.component';

describe('OutputHexComponent', () => {
  let component: OutputHexComponent;
  let fixture: ComponentFixture<OutputHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
