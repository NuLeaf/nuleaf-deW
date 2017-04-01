import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';


// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
