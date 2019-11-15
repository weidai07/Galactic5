import $ from 'jquery';


export class Earth {
  constructor(age){
    this.age = age;
  }
}

export class Mercury extends Earth {
  constructor(age) {
    super(age);
    this.mercuryAge = mercuryAge;
  }
}

export class Venus extends Earth {
  constructor(age) {
    super(age);
    this.venusAge = venusAge;
  }
}

export class Mars extends Earth {
  constructor(age) {
    super(age);
    this.marsAge = marsAge;
  }
}

export class Jupiter extends Earth {
  constructor(age) {
    super(age);
    this.jupiterAge = jupiterAge;
  }
}
