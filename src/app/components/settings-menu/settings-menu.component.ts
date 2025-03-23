import { Location } from "@angular/common";
import { Component, inject, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { settingsModel } from "../../../../types";

@Component({
  selector: "app-settings-menu",
  imports: [FormsModule],
  template: `
    <dialog
      [open]="show()"
      id="settingsDialog"
      class="rounded-lg bg-stone-950/70 backdrop-blur-sm text-stone-200 backdrop:bg-stone-900/50 inset-0 m-auto select-none"
    >
      <form name="settingsForm" class="p-6">
        <div class="space-y-6">
          <header class="text-center">
            <h1 class="text-2xl font-bold text-stone-100">Configurações</h1>
            <p class="text-stone-400 text-sm mt-1">
              Personalize sua experiência
            </p>
          </header>

          <div class="space-y-4">
            <div class="space-y-3">
              <label class="block text-sm font-bold text-stone-300">
                Nome
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="mt-1 w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         placeholder:text-stone-500"
                  [(ngModel)]="settings().name"
                  autocomplete="given-name"
                  placeholder="Seu nome"
                />
              </label>

              <label class="block text-sm font-bold text-stone-300">
                Cidade
                <input
                  id="city"
                  name="city"
                  [(ngModel)]="settings().city"
                  type="text"
                  class="mt-1 w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         placeholder:text-stone-500"
                  autocomplete="off"
                  placeholder="Sua cidade"
                />
              </label>

              <label class="block text-sm font-bold text-stone-300">
                URL da Foto
                <input
                  id="profUrl"
                  name="profUrl"
                  [(ngModel)]="settings().picture"
                  type="text"
                  class="mt-1 w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         placeholder:text-stone-500"
                  autocomplete="photo"
                  placeholder="URL da foto de perfil"
                />
              </label>

              <label class="block text-sm font-bold text-stone-300">
                URL do Fundo
                <input
                  id="bgUrl"
                  name="bgUrl"
                  [(ngModel)]="settings().background"
                  type="text"
                  class="mt-1 w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         placeholder:text-stone-500"
                  autocomplete="url"
                  placeholder="URL da imagem de fundo"
                />
              </label>
            </div>

            <div class="flex items-center justify-between px-1 py-2">
              <label for="twelveHours" class="text-sm font-bold text-stone-300"
                >Formato 12 Horas</label
              >
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  id="twelveHours"
                  name="twelveHours"
                  [(ngModel)]="settings().twelveHours"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:border-gray-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>

            <div class="flex items-center justify-between px-1 py-2">
              <label for="showDate" class="text-sm font-bold text-stone-300"
                >Mostrar Data</label
              >
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  id="showDate"
                  name="showDate"
                  [(ngModel)]="settings().showDate"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>

            <div class="flex gap-3 mt-6">
              <button
                class="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 
                       hover:bg-blue-800 rounded-md transition-colors duration-200 cursor-pointer"
                (click)="handleSave()"
              >
                Salvar
              </button>
              <button
                class="flex-1 px-4 py-2 text-sm font-bold text-white bg-red-600 
                       hover:bg-red-800 rounded-md transition-colors duration-200 cursor-pointer"
                (click)="resetConfigs()"
              >
                Redefinir
              </button>
            </div>
          </div>
        </div>
      </form>
    </dialog>
  `,
})
export class SettingsMenuComponent {
  settings = model.required<settingsModel>();
  show = model(false);
  private location = inject(Location);
  handleSave() {
    this.location.replaceState(`?s=${btoa(JSON.stringify(this.settings()))}`);
    this.show.set(false);
  }
  resetConfigs() {
    this.location.replaceState("/");
    location.reload();
  }
}
