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
    var meatCost = 0;
    var veggieCost = 0;
    if(top=="meat"){
      meatCost = meatToppings.length*0.99;
    }
    if(top=="veggie"){
      veggieCost = veggieToppings.length*0.99;
    }
  }
  price(){

  }
  //type class functions below
static promotionalDeal(){}

}
