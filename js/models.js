class Vehicle { 

 

  constructor(data) { 

    Object.assign(this, data); 

  } 

 

  get name() { 

    return `${this.manufacturer} ${this.model} ${this.variant}`; 

  } 

 

  get discount() { 

    return this.pricing.listPrice - 

       this.pricing.streetPrice; 

  } 

 

  get discountPercent() { 

 

    return ( 

      this.discount / 

      this.pricing.listPrice 

    ) * 100; 

 

  } 

 

} 