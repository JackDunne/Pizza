class pizza{
  //type constructor below
  constructor(s,mT,vT){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings = vT;
  }
  //type instance functions below

  sizeCost(){
    var sizeCost = 0;
    if(this.size == "S"){
      sizeCost = 7.99
    }
    if(this.size == "M"){
      sizeCost = 9.99;
    }
    if(this.size == "L"){
      sizeCost = 12.99;
    }
    if(this.size == "XL"){
      sizeCost = 15.99;
    }
  }

  toppingCost(top){
    if(top=="meat"){
      meatCost = this.meatToppings.length*0.99;
    }
    if(top=="veggie"){
      veggieCost = this.veggieToppings.length*0.5;
    }
  }
  price(){
    return this.sizeCost()+toppingCost("meat")+toppingCost("veggie");
  }
  //type class functions below
static promotionalDeal(pizza,percent){
  percent = percent*0.01;
  return pizza.price()-(pizza.price()*percent);
  }
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
  
}
