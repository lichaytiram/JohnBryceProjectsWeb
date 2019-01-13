import { BoilVolume } from './Itry18v12.model';
import { Volume } from './Itry18v13.model';
import { Ingredients } from './Itry18v2.model';
import { Method } from './Itry18v7.model';

export interface RootObject {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: BoilVolume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}