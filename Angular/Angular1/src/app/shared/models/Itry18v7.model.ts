import { MashTemp } from './Itry18v10.model';
import { Fermentation } from './Itry18v8.model';

export interface Method {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist?: any;
}