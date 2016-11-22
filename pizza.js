class Pizza{
  //type constructor below
  constructor(s,mT,vT){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings = vT;
  }
  //type instance functions below

  sizeCost(){
    var sizeCost = 0;
    if(this.size == "S" || this.size == "s"){
      return 7.99
    }
    else if(this.size == "M"){
      return 9.99;
    }
    else if(this.size == "L"){
      return 12.99;
    }
    else if(this.size == "XL"){
      return 15.99;
    }
  }

  toppingCost(top){
    if(top=="meat"){
      return this.meatToppings.length*0.99;
    }
    else if(top=="veggie"){
      return this.veggieToppings.length*0.5;
    }
  }
  price(){
    return this.sizeCost()+this.toppingCost("meat")+this.toppingCost("veggie");
  }
  //type class functions below
static promotionalDeal(pizza,percent){
  percent = percent*0.01;
  return pizza.price()-(pizza.price()*percent);
  }

addTopping(toptype,newtop){
  if(toptype == "meat"){
    this.meatToppings = this.meatToppings+newtop;
  }
  if(toptype == "veggie"){
    this.veggieToppings = this.veggieToppings+newtop;
  }
}

removeTopping(toptype,newtop){
  let front;
  let back;
  if(toptype == "meat"){
    let index = this.meatToppings.indexOf(newtop);
    front = this.meatToppings.slice(0,index);
    back = this.meatToppings.slice(index + 1,this.meatToppings.length);
    this.meatToppings = front.concat(back);
  }
  if(toptype == "veggie"){
    let index = this.veggieToppings.indexOf(newtop);
    front = this.veggieToppings.slice(0,index);
    back = this.veggieToppings.slice(index + 1,this.meatToppings.length);
    this.veggieToppings = front.concat(back);
    }
  }
}

let mypizza = new Pizza("M",["sausage","peperoni","bacon"],["peppers","onions","pineapple"]);
mypizza.removeTopping("meat","sausage");
mypizza.removeTopping("veggie","peppers");
console.log(mypizza.meatToppings,mypizza.veggieToppings);
