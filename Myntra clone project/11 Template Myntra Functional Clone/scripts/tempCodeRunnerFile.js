
function loadBagItemObjects(){
  console.log(bagItems);
  bagItemObjects=bagItems.map(itemId=>{
    for(let i=0;i<items.length;i++){
      if(itemId==items[i].id){
        return items[i];
      }
    }
  })
}
console.log(bagItemObjects);