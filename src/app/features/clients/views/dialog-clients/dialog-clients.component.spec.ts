import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClientsComponent } from './dialog-clients.component';

describe('DialogClientsComponent', () => {
  let component: DialogClientsComponent;
  let fixture: ComponentFixture<DialogClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
