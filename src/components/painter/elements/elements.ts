import { ElementStatement, TData } from '@sugarlabs/musicblocks-v4-lib';
import { TElementName } from '@sugarlabs/musicblocks-v4-lib/@types/specification';
import { moveForward } from '../painter';
import { setThickness, setColor } from '../sketchP5';

export class ElementForward extends ElementStatement {
    constructor() {
        super('forward' as TElementName, 'forward', { steps: ['number'] });
    }

    onVisit(params: { [key: string]: TData }): void {
        setThickness(4);
        setColor(72, 0, 158);
        moveForward(params['steps'] as number);
    }
}

export const foo = 'bar';
