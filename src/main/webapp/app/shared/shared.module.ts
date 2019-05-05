import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SupportSharedLibsModule, SupportSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SupportSharedLibsModule, SupportSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SupportSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupportSharedModule {
  static forRoot() {
    return {
      ngModule: SupportSharedModule
    };
  }
}
