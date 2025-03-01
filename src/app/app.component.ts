import { Component, signal } from "@angular/core";
import type { settingsModel } from "../../types";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeCardComponent } from "./components/home-card/home-card.component";
import { HomePlaceholderComponent } from "./components/home-placeholder/home-placeholder.component";
import { SettingsMenuComponent } from "./components/settings-menu/settings-menu.component";

@Component({
  selector: "app-root",
  imports: [
    FooterComponent,
    HomeCardComponent,
    SettingsMenuComponent,
    HomePlaceholderComponent,
  ],
  template: `
    <div
      class="bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden h-svh w-svw"
      (contextmenu)="showSettingsMenu($event)"
      (dblclick)="showSettingsMenu($event)"
      [style]="{ 'background-image': 'url(' + settings().background + ')' }"
    >
      @defer {
      <app-home-card [settings]="settings()" />
      <app-settings-menu [settings]="settings()" [(show)]="showMenu" />
      <app-footer />
      } @placeholder (minimum 1s) {
      <app-home-placeholder />
      }
    </div>
  `,
})
export class AppComponent {
  showMenu = signal(false);

  showSettingsMenu(event: MouseEvent) {
    event.preventDefault(); // Prevent default context menu
    this.showMenu.set(!this.showMenu());
  }

  parseSettingsFromUrl(): settingsModel {
    const url = new URL(window.location.href);
    const defaultSettings = {
      name: "Fulano(a)",
      city: "Desconhecida",
      picture: "https://picsum.photos/150.webp",
      background: "https://picsum.photos/1280/720.webp",
      twelveHours: true,
      showDate: true,
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

  settings = signal<settingsModel>(this.parseSettingsFromUrl());
}
