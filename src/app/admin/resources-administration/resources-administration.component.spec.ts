import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesAdministrationComponent } from './resources-administration.component';

describe('ResourcesAdministrationComponent', () => {
  let component: ResourcesAdministrationComponent;
  let fixture: ComponentFixture<ResourcesAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
