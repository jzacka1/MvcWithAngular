import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
describe('TestService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(TestService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=test.service.spec.js.map