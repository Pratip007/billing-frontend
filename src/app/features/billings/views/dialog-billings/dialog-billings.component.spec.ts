import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBillingsComponent } from './dialog-billings.component';

describe('DialogBillingsComponent', () => {
  let component: DialogBillingsComponent;
  let fixture: ComponentFixture<DialogBillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBillingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogBillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
