export class Map {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.items = [];
    this.hero = {};
  }

  move () {
    const hero = this.hero;
    hero.move();
    const rightX = hero.x + hero.width;
    let topY = hero.y + hero.height;
    let isFalling = true;
    this.items.forEach(i => {
      if (i.move) i.move();
      if (i.x < rightX && (i.x + i.width) > hero.x) {
        const itemTop = i.y + i.height;
        if (i.y < topY && hero.y < i.y) {
          hero.y = hero.height + i.y - 1;
          topY = hero.y + hero.height;
          hero.yspeed = 0;
          hero.yacc = 0;
        } else if (itemTop >= hero.y && topY > itemTop) {
          hero.y = itemTop + 1;
          topY = hero.y + hero.height;
          hero.yspeed = 0;
          hero.yacc = 0;
        }
        if (isFalling && itemTop === hero.y - 1) isFalling = false;
      }
    });

    if (isFalling && hero.yacc >= 0) hero.yacc = -1;
  }
}
