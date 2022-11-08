import { resolve } from "dns";
import { ModuleResolutionKind } from "typescript";

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise(resolve => setTimeout(()=>resolve(ms), ms));
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];
    /*const prom1:Promise<number> = new Promise(resolve=>mock(300));
    const prom2:Promise<number>  = new Promise(resolve=>mock(200));
    const prom3:Promise<number>  = new Promise(resolve=>mock(100));
    return Promise.all([prom1, prom2, prom3]).then(values=>{
        const [data1, data2, data3] = values;
        result.push(data1); result.push(data2); result.push(data3); 
        return result;});*/
    return Promise.all([mock(100), mock(200), mock(300)]).then(values=>{
        const [data1, data2, data3] = values;
        result.push(data1); result.push(data2); result.push(data3); 
        return result;});
   /* return mock(100)
        .then((data1) => {
            result.push(data1);
            return mock(200);
        })
        .then((data2) => {
            result.push(data2);
            return mock(300);
        })
        .then((data3) => {
            result.push(data3);
            return result;
        });*/
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    return Promise.reject(new Error('my error')).catch((err) => {return err.message});
}
