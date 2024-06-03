import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { settingsModel } from "../../../../types";

@Component({
  selector: "app-settings-menu",
  imports: [FormsModule],
  template: `
    <button
      (click)="showMenu()"
      class="absolute top-4 right-4 z-10 transition-all opacity-60 hover:opacity-100 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="35"
        height="35"
      >
        <title>cog</title>
        <path
          d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
        />
      </svg>
    </button>
    <dialog
      id="settingsDialog"
      class="rounded-lg bg-stone-950/70 backdrop-blur-sm text-stone-200 backdrop:bg-stone-900/50 inset-0 m-auto"
    >
      <form name="settingsForm">
        <div class="modal-box p-2 rounded-md">
          <h1 class="font-bold text-xl text-center">Configurações</h1>
          <div class="mt-4">
            <form method="dialog" class="flex flex-col gap-4">
              <label
                class="input input-bordered flex items-center gap-2 rounded-md"
              >
                Nome:
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="text-stone-200 px-1 rounded outline outline-stone-600"
                  [(ngModel)]="settings().name"
                  autocomplete="given-name"
                  placeholder="Nome"
                />
              </label>
              <label
                class="input input-bordered flex items-center gap-2 rounded-md"
              >
                Cidade:
                <input
                  id="city"
                  name="city"
                  [(ngModel)]="settings().city"
                  type="text"
                  class="text-stone-200 px-1 rounded outline outline-stone-600"
                  autocomplete="off"
                  placeholder="Cidade"
                />
              </label>
              <label
                class="input input-bordered flex items-center gap-2 rounded-md"
              >
                Foto:
                <input
                  id="profUrl"
                  name="profUrl"
                  [(ngModel)]="settings().picture"
                  type="text"
                  class="text-stone-200 px-1 rounded outline outline-stone-600"
                  autocomplete="photo"
                  placeholder="Foto de perfil"
                />
              </label>
              <label
                class="input input-bordered flex items-center gap-2 rounded-md"
              >
                Fundo:
                <input
                  id="bgUrl"
                  name="bgUrl"
                  [(ngModel)]="settings().background"
                  type="text"
                  class="text-stone-200 px-1 rounded outline outline-stone-600"
                  autocomplete="url"
                  placeholder="Imagem de fundo"
                />
              </label>
              <div class="form-control text-center">
                <label class="label cursor-pointer">
                  <span class="label-text">Formato 12 Horas</span>
                  <input
                    id="twelveHours"
                    name="twelveHours"
                    [(ngModel)]="settings().twelveHours"
                    type="checkbox"
                    class="ml-1"
                  />
                </label>
              </div>
              <button
                class="transition-colors cursor-pointer px-4 py-2 bg-green-700 hover:bg-green-800 rounded-md"
                (click)="handleSave()"
              >
                Salvar
              </button>
              <button
                class="transition-colors cursor-pointer px-4 py-2 bg-red-700 hover:bg-red-800 rounded-md"
                (click)="resetConfigs()"
              >
                Redefinir para padrão
              </button>
            </form>
          </div>
        </div>
      </form>
    </dialog>
  `,
})
export class SettingsMenuComponent {
  settings = input.required<settingsModel>();
  showMenu() {
    const dialog = document.getElementById(
      "settingsDialog"
    ) as HTMLDialogElement;
    if (dialog) dialog.showModal();
  }
  handleSave() {
    const dialog = document.getElementById(
      "settingsDialog"
    ) as HTMLDialogElement;
    if (dialog) dialog.close();
    location.href = `?s=${btoa(JSON.stringify(this.settings()))}`;
  }
  resetConfigs() {
    window.history.pushState({}, "", "/");
    location.reload();
  }
}
