import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="fixed bottom-0 w-full">
      <div class="flex justify-center p-4 mx-auto">
        <p
          class="text-center font-bold bg-stone-950/50 text-stone-200 p-2 rounded-md"
        >
          <a
            class="transition-all hover:underline hover:scale-105"
            href="https://lzart.com.br"
            target="_blank"
            external
            >Desenvolvido por LZArt</a
          >
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
