import { Chance } from 'chance';

import { ICategory } from './category.interface';
import { displayPrompts } from '../consts/options';

export class Location implements ICategory {

    private chance: any;

    constructor() {
        this.chance = Chance();
    }

    public getCategoryName(): string {
        return 'location';
    }

    public getTypes(): string[] {
        return [
            'address',
            '.address',
            'altitude',
            '.altitude',
            'areacode',
            'city',
            'coordinates',
            '.coordinates',
            'country',
            '.country',
            'depth',
            '.depth',
            'geohash',
            '.geohash',
            'latitude',
            '.latitude',
            'longitude',
            '.longitude',
            'phone',
            '.phone',
            'postal',
            'postalcode',
            'province',
            '.province',
            'state',
            '.state',
            'street',
            '.street',
            'zip',
            '.zip',
        ];
    }

    public getOptCommands(): string[] {
        return this.getTypes().filter(cmd => cmd[0] === '.');
    }

    public async execHandlers(command: string): Promise<any> {
        switch (command) {
            case '.address': {
                return await this.handleAddress();
            }
            case '.altitude': {
                return await this.handleAltitude();
            }
            case '.coordinates': {
                return await this.handleCoordinates();
            }
            case '.country': {
                return await this.handleCountry();
            }
            case '.depth': {
                return await this.handleDepth();
            }
            case '.geohash': {
                return await this.handleGeoHash();
            }
            case '.latitude': {
                return await this.handleLatitude();
            }
            case '.longitude': {
                return await this.handleLongitude();
            }
            case '.phone': {
                return await this.handlePhone();
            }
            case '.province': {
                return await this.handleProvince();
            }
            case '.state': {
                return await this.handleState();
            }
            case '.street': {
                return await this.handleStreet();
            }
            case '.zip': {
                return await this.handleZip();
            }
            default: {
                console.log('No command found');
                return null;
            }
        }
    }

    /* Custom functions */
    private async handleAddress(): Promise<any> {
        const values = await displayPrompts([
            'Use short suffix? (y/n)'
        ]);
        const val = this.chance.address({
            ...values[0] && { short_suffix: values[0].toLowerCase() === 'y' }
        });
        return val;
    }

    private async handleAltitude(): Promise<any> {
        const values = await displayPrompts([
            'How many decimals of precision (eg. 7)?',
            'What is the max altitude (blank for no max)?'
        ]);
        const val = this.chance.altitude({
            ...values[0] && { fixed: Number(values[0]) },
            ...values[1] && { max: Number(values[1]) }
        });
        return val;
    }

    private async handleCoordinates(): Promise<any> {
        const values = await displayPrompts([
            'How many decimals of precision (eg. 2)?'
        ]);
        const val = this.chance.coordinates({
            ...values[0] && { fixed: Number(values[0]) },
        });
        return val;
    }

    private async handleCountry(): Promise<any> {
        const values = await displayPrompts([
            'Use full name for country? (y/n)'
        ]);
        const val = this.chance.country({
            ...values[0] && { full: values[0].toLowerCase() === 'y' }
        });
        return val;
    }

    private async handleDepth(): Promise<any> {
        const values = await displayPrompts([
            'How many decimals of precision (eg. 2)?',
            'What is the min depth? (blank for no min)'
        ]);
        const val = this.chance.depth({
            ...values[0] && { fixed: Number(values[0]) },
            ...values[1] && { min: Number(values[1]) * (Number(values[1]) < 0 ? -1 : 1) }
        });
        return val;
    }

    private async handleGeoHash(): Promise<any> {
        const values = await displayPrompts([
            'Enter length of geohash (eg. 5)',
        ]);
        const val = this.chance.geohash({
            ...values[0] && { fixed: Number(values[0]) } 
        });
        return val;
    }

    private async handleLatitude(): Promise<any> {
        const values = await displayPrompts([
            'How many decimals of precision (eg. 7)?'
        ]);
        const val = this.chance.latitude({
            ...values[0] && { fixed: Number(values[0]) },
        });
        return val;
    }

    private async handleLongitude(): Promise<any> {
        const values = await displayPrompts([
            'How many decimals of precision (eg. 7)?'
        ]);
        const val = this.chance.longitude({
            ...values[0] && { fixed: Number(values[0]) },
        });
        return val;
    }

    public async handlePhone(): Promise<any> {
        const values = await displayPrompts([
            'Should format phone number? (y/n)',
            'Enter country code (us/uk/fr)',
            'Use mobile number? (y/n)' // uk and fr only
        ]);
        const val = this.chance.phone({
            ...values[0] && { formatted: values[0].toLowerCase() === 'y' },
            ...values[1] && { country: values[1] },
            ...values[2] && { mobile: values[2].toLowerCase() === 'y' },
        });
        return val;
    }

    private async handleProvince(): Promise<any> {
        const values = await displayPrompts([
            'Use full name for province? (y/n)',
            'Enter specific country (eg. it)'
        ]);
        const val = this.chance.province({
            ...values[0] && { full: values[0].toLowerCase() === 'y' },
            ...values[1] && { country: values[1] }
        });
        return val;
    }

    public async handleState(): Promise<any> {
        const values = await displayPrompts([
            'Use full state name? (y/n)',
            'Include territories? (y/n)',
            'Include armed forces? (y/n)',
            'Include DC? (y/n)',
            'Enter country (eg. us)'
        ]);
        const val = this.chance.state({
            ...values[0] && { full: values[0].toLowerCase() === 'y' },
            ...values[1] && { territories: values[1].toLowerCase() === 'y' },
            ...values[2] && { armed_forces: values[2].toLowerCase() === 'y' },
            ...values[3] && { us_states_and_dc: values[3].toLowerCase() === 'y' },
            ...values[4] && { country: values[4] },
        });
        return val;
    }

    public async handleStreet(): Promise<any> {
        const values = await displayPrompts([
            'Enter country (eg. it)',
            'Use short suffix? (y/n)',
            'Enter number of syllables (eg. 8)',
        ]);
        const val = this.chance.street({
            ...values[0] && { country: values[0].toLowerCase() === 'y' },
            ...values[1] && { short_suffix: values[1].toLowerCase() === 'y' },
            ...values[2] && { syllables: values[2] },
        });
        return val;
    }

    public async handleZip(): Promise<any> {
        const values = await displayPrompts([
            'Use zip+4? (y/n)',
        ]);
        const val = this.chance.zip({
            ...values[0] && { plusfour: values[0].toLowerCase() === 'y' },
        });
        return val;
    }

}
