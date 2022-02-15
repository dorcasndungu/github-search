import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroRepoComponent } from './zero-repo.component';

describe('ZeroRepoComponent', () => {
  let component: ZeroRepoComponent;
  let fixture: ComponentFixture<ZeroRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
