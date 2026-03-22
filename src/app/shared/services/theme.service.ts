import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly STORAGE_KEY = 'theme';

    readonly isDark = signal<boolean>(this.getInitialTheme());

    constructor() {
        this.applyTheme(this.isDark());

        effect(() => {
            this.applyTheme(this.isDark());
            localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
        });
    }

    toggle(): void {
        this.isDark.update(v => !v);
    }

    private getInitialTheme(): boolean {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) return stored === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    private applyTheme(dark: boolean): void {
        document.documentElement.classList.toggle('dark', dark);
    }
}
