import { mount as mountView, mountSketch, setupAction } from './view';
import { sketch, run, reset } from './painter';

export function mount(container: HTMLElement): void {
    mountView(container);

    setTimeout(() => {
        mountSketch(sketch);

        setupAction('run', run);
        setupAction('reset', reset);
    });
}
