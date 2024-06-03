import { Component, input } from "@angular/core";
import { settingsModel } from "../../../../types";
import { SearchInputComponent } from "../search-input/search-input.component";

@Component({
  selector: "app-home-card",
  imports: [SearchInputComponent],
  template: `
    <div class="h-screen font-bold grid place-items-center select-none">
      <div>
        <main class="rounded-md">
          <div
            class="mx-auto bg-stone-950/70 backdrop-blur-sm w-full p-6 flex flex-col justify-around text-center items-center rounded-md shadow-2xl"
          >
            <p id="clockElement" class="text-4xl font-mono text-stone-200">
              00:00:00 AM
            </p>
            @if (settings().showDate) {
            <p id="dateElement" class="text-xl m-2 font-mono text-stone-200">
              {{ getCurrentDate() }}
            </p>
            }
            <img
              id="profilePicture"
              fetchpriority="high"
              width="150"
              height="150"
              class="rounded-full m-4 border border-solid shadow shadow-white border-white object-cover [image-rendering:pixelated] transition-all hover:scale-105 hover:-rotate-3"
              [src]="settings().picture"
              alt="Foto de perfil"
              title="Clique direito do mouse para configurar."
            />
            <p id="message" class="text-stone-200">
              Olá, {{ settings().name }}!
            </p>
          </div>
        </main>
        <app-search-input />
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeCardComponent {
  settings = input.required<settingsModel>();

  clock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let clockStr = "";

    if (this.settings().twelveHours) {
      let amPm = hours >= 12 ? "PM" : "AM";
      let twelveHour = hours % 12 || 12;
      clockStr = `${twelveHour.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
    } else {
      clockStr = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    const clockElement = document.getElementById("clockElement");
    if (clockElement) clockElement.innerText = clockStr;
  };

  getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }

  ngOnInit() {
    this.clock();
    setInterval(this.clock, 1000);
  }
}
