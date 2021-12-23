//error case
//function test<T>(node: T): T{
 //   console.log(node);
  //  console.log(node.value);
   // return node;
//}

type Tree = { value: string };
function test2<T extends Tree>(node:T): T{
    console.log(node.value);
    return node;
}