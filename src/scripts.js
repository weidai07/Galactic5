import $ from 'jquery';


export class Earth {
  constructor(age){
    this._earthAge = earthAge;
  }
}

export class Mercury extends Earth {
  constructor(mercuryAge) {
    super(age);
    this._mercuryAge = mercuryAge;
  }
}

export class Venus extends Earth {
  constructor(venusAge) {
    super(age);
    this._venusAge = venusAge;
  }
}

export class Mars extends Earth {
  constructor(marsAge) {
    super(age);
    this._marsAge = marsAge;
  }
}

export class Jupiter extends Earth {
  constructor(jupiterAge) {
    super(age);
    this._jupiterAge = jupiterAge;
  }
}
