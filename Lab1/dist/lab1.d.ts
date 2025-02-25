declare const sum: (num1: number, num2: number, num3: number) => number;
declare const result: number;
declare let numberValue: number;
declare const stringValue: string;
declare let booleanValue: boolean;
declare const arrayValue: number[];
declare const objectValue: {
    key: string;
    value: number;
};
declare let anyValue: any;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
