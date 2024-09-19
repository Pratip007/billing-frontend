import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectorComponent } from './content-projector.component';

describe('ContentProjectorComponent', () => {
  let component: ContentProjectorComponent;
  let fixture: ComponentFixture<ContentProjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
