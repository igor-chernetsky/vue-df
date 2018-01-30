export class Map {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.items = [];
    this.hero = {};
    this.respoun = {x: 100, y: 200};
  }

  move () {
    const hero = this.hero;
    hero.move();
    let rightX = hero.x + hero.width;
    let topY = hero.y + hero.height;
    let isFalling = true;
    this.items.forEach(i => {
      if (i.move) i.move();
      const itemTop = i.y + i.height;
      const itemRight = i.x + i.width;

      if (i.y < topY && itemTop > hero.y) {
        if (i.x <= rightX && hero.x < i.x) {
          hero.x = i.x - hero.width - 1;
          rightX = hero.x + hero.width;
          hero.stopX();
        } else if (itemRight >= hero.x && rightX > itemRight) {
          hero.x = itemRight + 1;
          rightX = hero.x + hero.width;
          hero.stopX();
        }
      }

      if (i.x < rightX && itemRight > hero.x) {
        if (i.y <= topY && hero.y < i.y) {
          hero.y = i.y - hero.height - 1;
          topY = hero.y + hero.height;
          hero.stopY();
        } else if (itemTop >= hero.y && topY > itemTop) {
          hero.y = itemTop + 1;
          topY = hero.y + hero.height;
          hero.stopY();
        }
        if (isFalling && itemTop === hero.y - 1) isFalling = false;
      }
    });

    if (isFalling && hero.yacc >= 0) hero.yacc = -1;
    if (topY < 0) {
      hero.stopY();
      this.respounHero();
    }
    if (hero.x < 0) {
      hero.x = 0;
      hero.stopX();
    }
    if (rightX > this.width) {
      hero.x = this.width - hero.width;
      hero.stopX();
    }
  }

  respounHero () {
    this.hero.x = this.respoun.x;
    this.hero.y = this.respoun.y;
  }
}
