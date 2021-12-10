export class Module1{
    print(): void{
        localPrint("module1.print() called!!");
    }


}

function localPrint(text: string) {
    console.log(`local print: ${text}`);
}


export function hoge() {
    console.log("hoge");
}