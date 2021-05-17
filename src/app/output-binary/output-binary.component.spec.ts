import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBinaryComponent } from './output-binary.component';

describe('OutputBinaryComponent', () => {
  let component: OutputBinaryComponent;
  let fixture: ComponentFixture<OutputBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
