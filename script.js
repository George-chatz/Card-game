
  class HeroesCards {
    constructor(hp,attack,defence,stamina) {
      this.attack=attack
      this.hp=hp
      this.defence=defence
      this.stamina=stamina
    }
}
 const randomstat = (stats) => {
     stats = Math.floor(Math.random() * 100);
     return stats;
 }

 let herocards1=[];
 let herocards2=[];
 for ( let i = 0; i < 30 ; i++){
   if ( i < 15 ) {  
     herocards1[i]= new HeroesCards((randomstat()),(randomstat()),(randomstat()),(randomstat())); 
   }
   else {
     herocards2[i]= new HeroesCards((randomstat()),(randomstat()),(randomstat()),(randomstat())); 
   }
 }

 
const NewGame=document.getElementById('NewGame');

  NewGame.addEventListener('click',()=>{
    let herocards1=[];
    let herocards2=[];
    for ( let i = 0; i < 30 ; i++){
      if ( i < 15 ) {  
        herocards1[i]= new HeroesCards((randomstat()),(randomstat()),(randomstat()),(randomstat())); 
      }
      else {
        herocards2[i]= new HeroesCards((randomstat()),(randomstat()),(randomstat()),(randomstat())); 
      }
    }
    console.log(herocards1,herocards2)
    return herocards1 ,herocards2;
})

console.log(herocards1 ,herocards2)




if ( herocards1.length != 0 || herocards2.length != 0){
  if(herocards1[0].hp > herocards2[15].hp ){
    herocards1.push(herocards2[15]);
    herocards2.splice(0, 1);
  }
  else {
    herocards2.push(herocards1[0]);
    herocards2.splice(0,1);
  }
}