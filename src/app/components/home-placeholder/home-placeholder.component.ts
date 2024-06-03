import { Component, NO_ERRORS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-home-placeholder",
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <div class="h-screen font-bold grid place-items-center select-none">
      <div>
        <main class="rounded-md">
          <div
            class="mx-auto bg-stone-950/70 backdrop-blur-sm w-full p-6 flex flex-col justify-around text-center items-center rounded-md shadow-2xl"
          >
            <div
              class="h-10 w-56 bg-stone-400/70 rounded-md animate-pulse"
            ></div>
            <div
              class="h-6 w-40 mt-2 bg-stone-400/70 rounded-md animate-pulse"
            ></div>
            <div
              class="w-[150px] h-[150px] rounded-full shadow-lg m-4 border bg-stone-400/70 animate-pulse"
            ></div>
            <div
              class="h-6 w-32 bg-stone-400/70 rounded-md animate-pulse"
            ></div>
          </div>
        </main>
        <div class="mx-auto text-center mt-4">
          <div
            class="h-10 w-full max-w-xs mx-auto rounded-md bg-stone-600/70 animate-pulse"
          ></div>
        </div>
      </div>
    </div>
    <footer class="fixed bottom-0 w-full">
      <div class="flex justify-center py-2 mx-auto">
        <div class="h-10 w-44 bg-stone-400/70 rounded-md animate-pulse"></div>
      </div>
    </footer>
  `,
})
export class HomePlaceholderComponent {}
