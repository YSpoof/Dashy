import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  imports: [],
  template: `
    <footer class="transition-all fixed bottom-0 w-full hover:scale-105">
      <div class="flex justify-center py-2 mx-auto">
        <p
          class="text-center font-bold bg-stone-950/70 backdrop-blur-sm text-stone-200 p-2 rounded-md"
        >
          <a
            class="transition-all hover:underline hover:scale-105"
            href="https://lzart.com.br"
            target="_blank"
            >Desenvolvido por LZArt</a
          >
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
