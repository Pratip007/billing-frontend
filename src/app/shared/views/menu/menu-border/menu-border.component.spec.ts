import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBorderComponent } from './menu-border.component';

describe('MenuBorderComponent', () => {
  let component: MenuBorderComponent;
  let fixture: ComponentFixture<MenuBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
