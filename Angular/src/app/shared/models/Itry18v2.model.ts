import { Malt } from './Itry18v5.model';
import { Hop } from './Itry18v3.model';

export interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}