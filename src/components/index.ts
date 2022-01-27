import { mount } from './painter';

const root = document.getElementById('root')!;

const artboardContainer = document.createElement('div');
artboardContainer.id = 'artboards';
root.appendChild(artboardContainer);
mount(artboardContainer);

// -------------------------------------------------------------------------------------------------

import {
    generateFromSnapshot,
    generateSnapshot,
    getCrumbs,
    getInstance,
    getNode,
    registerElementSpecificationEntries,
    registerElementSpecificationEntry,
    run,
} from '@sugarlabs/musicblocks-v4-lib';
import { librarySpecification } from '@sugarlabs/musicblocks-v4-lib';

import painterSpecification from './painter/elements';

registerElementSpecificationEntries(painterSpecification);
registerElementSpecificationEntry('value-number', librarySpecification['value-number']);

window.addEventListener('runevent', () => {
    generateFromSnapshot({
        process: [],
        routine: [],
        crumbs: [
            [
                {
                    elementName: 'forward',
                    argMap: {
                        steps: {
                            elementName: 'value-number',
                        },
                    },
                },
            ],
        ],
    });

    getInstance(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        getNode(generateSnapshot().crumbs[0][0]['argMap']['steps'].nodeID)!.instanceID,
    )!.instance.updateLabel('100');

    run(getCrumbs()[0].nodeID);
});
