/**
* <auto-generated>
* Code generated by LUISGen Assets\LU\models\LUIS\cafeLUISModel.json -ts CafeLUISModel -o Assets\LU\models\LUIS
* Tool github: https://github.com/microsoft/botbuilder-tools
* Changes may cause incorrect behavior and will be lost if the code is
* regenerated.
* </auto-generated>
*/
import { DateTimeSpec, IntentData, InstanceData } from 'botbuilder-ai';
export interface _Intents {
    Book_Table: IntentData;
    Greeting: IntentData;
    None: IntentData;
    Who_are_you_intent: IntentData;
}
export interface _Instance {
    partySize?: InstanceData[];
    datetime?: InstanceData[];
    number?: InstanceData[];
    cafeLocation?: InstanceData[];
}
export interface _Entities {
    partySize?: string[];
    datetime?: DateTimeSpec[];
    number?: number[];
    cafeLocation?: string[][];
    $instance: _Instance;
}
export interface CafeLUISModel {
    text: string;
    alteredText?: string;
    intents: _Intents;
    entities: _Entities;
    [propName: string]: any;
}
