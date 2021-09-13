import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageSearchComponent } from './user-image-search.component';

describe('UserImageSearchComponent', () => {
  let component: UserImageSearchComponent;
  let fixture: ComponentFixture<UserImageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
