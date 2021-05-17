import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputAsciiComponent } from './output-ascii.component';

describe('OutputAsciiComponent', () => {
  let component: OutputAsciiComponent;
  let fixture: ComponentFixture<OutputAsciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputAsciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputAsciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
