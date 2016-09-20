// This is the entry point to the application
//
// Since the QuickStart application is a web application that runs in a browser,
// your root module needs to import the BrowserModule
// from @angular/platform-browser to the imports array.
//
// This is the smallest amount of Angular that is needed
// for a minimal application to run in the browser.
//
// The QuickStart application doesn't do anything else,
// so you don't need any other modules.
// In a real application, you'd likely import FormsModule as well
// as RouterModule and HttpModule.
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component'

@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [ AppComponent ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }
