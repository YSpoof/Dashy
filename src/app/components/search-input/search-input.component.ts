import {
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-search-input",
  imports: [],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <search class="mx-auto text-center mt-4">
      <input
        #searchInput
        list="recentSearches"
        type="text"
        (keyup.enter)="doSearch()"
        title="Saiba mais sobre o Banger em lzart.com.br"
        placeholder="Pesquisar usando o Banger"
        class="w-full max-w-xs rounded-md bg-stone-950/70 backdrop-blur-sm text-stone-300 text-center shadow-md p-2"
      />
      <datalist #recentSearches id="recentSearches">
        <option value="!gg">Google</option>
        <option value="!yt">YouTube</option>
        <option value="!ytm">YouTube Music</option>
        <option value="!cfg">Configurar Banger</option>
      </datalist>
    </search>
  `,
})
export class SearchInputComponent {
  @ViewChild("searchInput") searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild("recentSearches") recentSearches!: ElementRef<HTMLDataListElement>;

  doSearch = () => {
    const search = this.searchInput.nativeElement.value.trim();
    if (search) {
      // Check if search already exists in datalist
      const existingOptions = Array.from(
        this.recentSearches.nativeElement.options
      );
      const isDuplicate = existingOptions.some((opt) => opt.value === search);

      if (!isDuplicate) {
        const option = document.createElement("option");
        option.value = search;
        this.recentSearches.nativeElement.appendChild(option);
      }

      this.searchInput.nativeElement.value = "";
      window.open(
        `https://banger.lzart.com.br?q=${encodeURIComponent(search)}`
      );
    }
  };

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }
}
