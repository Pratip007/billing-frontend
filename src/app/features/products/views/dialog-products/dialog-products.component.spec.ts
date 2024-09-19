import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductsComponent } from './dialog-products.component';

describe('DialogProductsComponent', () => {
  let component: DialogProductsComponent;
  let fixture: ComponentFixture<DialogProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
