import {
    IElementSpecificationEntryBlock,
    IElementSpecificationEntryData,
    IElementSpecificationEntryExpression,
    IElementSpecificationEntryStatement,
} from '@sugarlabs/musicblocks-v4-lib/@types/specification';

import { ElementForward } from './elements';

const specification: {
    [identifier: string]:
        | IElementSpecificationEntryData
        | IElementSpecificationEntryExpression
        | IElementSpecificationEntryStatement
        | IElementSpecificationEntryBlock;
} = {
    forward: {
        label: 'forward',
        type: 'Statement',
        category: 'Graphics',
        prototype: ElementForward,
    },
};

export default specification;
