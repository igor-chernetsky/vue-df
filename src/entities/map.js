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
          hero.xspeed = 0;
          hero.xacc = 0;
        } else if (itemRight >= hero.x && rightX > itemRight) {
          hero.x = itemRight + 1;
          rightX = hero.x + hero.width;
          hero.xspeed = 0;
          hero.xacc = 0;
        }
      }

      if (i.x < rightX && itemRight > hero.x) {
        if (i.y <= topY && hero.y < i.y) {
          hero.y = i.y - hero.height - 1;
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
    if (topY < 0) {
      hero.yacc = 0;
      hero.yspeed = 0;
    }
  }
}
