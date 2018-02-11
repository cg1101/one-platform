import { PlacementsModule } from './placements.module';

describe('PlacementsModule', () => {
  let placementsModule: PlacementsModule;

  beforeEach(() => {
    placementsModule = new PlacementsModule();
  });

  it('should create an instance', () => {
    expect(placementsModule).toBeTruthy();
  });
});
