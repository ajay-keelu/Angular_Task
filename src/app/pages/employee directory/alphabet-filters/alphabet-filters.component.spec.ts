import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetFiltersComponent } from './alphabet-filters.component';

describe('AlphabetFiltersComponent', () => {
  let component: AlphabetFiltersComponent;
  let fixture: ComponentFixture<AlphabetFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabetFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabetFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
