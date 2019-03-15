import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhsurferSharedLibsModule, JhsurferSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhsurferSharedLibsModule, JhsurferSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhsurferSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhsurferSharedModule {
    static forRoot() {
        return {
            ngModule: JhsurferSharedModule
        };
    }
}
