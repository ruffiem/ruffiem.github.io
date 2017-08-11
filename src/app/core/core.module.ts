import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from 'ng2-scroll-to';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot()
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
