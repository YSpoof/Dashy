import { Component } from "@angular/core";
import type { settingsModel } from "../../types";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeCardComponent } from "./components/home-card/home-card.component";
import { SettingsMenuComponent } from "./components/settings-menu/settings-menu.component";

@Component({
  selector: "app-root",
  imports: [FooterComponent, HomeCardComponent, SettingsMenuComponent],
  template: `
    <div
      id="app"
      class="bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden h-svh w-svw"
    >
      <app-home-card [settings]="settings" />
      @defer {
      <app-settings-menu [settings]="settings" />
      } @defer (on timer(2000ms)) {
      <app-footer />
      }
    </div>
  `,
})
export class AppComponent {
  parseSettingsFromUrl(): settingsModel {
    const url = new URL(window.location.href);
    const defaultSettings = {
      name: "Usuário",
      city: "Cidade",
      picture: "https://picsum.photos/150",
      background: "https://picsum.photos/1280/720",
      twelveHours: false,
    };
    try {
      // the s parameter is a base64 encoded JSON string
      if (!url.searchParams.has("s")) {
        return defaultSettings;
      }

      const settings = JSON.parse(atob(url.searchParams.get("s") as string));
      return {
        ...defaultSettings,
        ...settings,
      };
    } catch (error) {
      console.error("Error parsing settings from URL", error);
    }
    return defaultSettings;
  }

  settings: settingsModel = this.parseSettingsFromUrl();

  ngOnInit() {
    console.log("Settings:", this.settings);
    let body = document.getElementById("app") || document.body;
    body.style.backgroundImage = `url('${this.settings.background}')`;

    // Register SW
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }
}
