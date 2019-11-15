import $ from 'jquery';


export class Earth {
  constructor(earthAge){
    this.earthAge = earthAge;
  }
}

export class Mercury extends Earth {
  constructor(mercuryAge) {
    super(age);
    this.mercuryAge = mercuryAge;
  }
}

export class Venus extends Earth {
  constructor(venusAge) {
    super(age);
    this.venusAge = venusAge;
  }
}

export class Mars extends Earth {
  constructor(marsAge) {
    super(age);
    this.marsAge = marsAge;
  }
}

export class Jupiter extends Earth {
  constructor(jupiterAge) {
    super(age);
    this.jupiterAge = jupiterAge;
  }
}
