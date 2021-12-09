var globalString: string;

setGlobalSttring("this is ");
console.log("global string=${globalString}");


function setGlobalSttring(value: string) {
    globalString = value;
}