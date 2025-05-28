import {
  ApplicationConfig,
  isDevMode,
  provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideServiceWorker } from "@angular/service-worker";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:3000",
    }),
  ],
};
