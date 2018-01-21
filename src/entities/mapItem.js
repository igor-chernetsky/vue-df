export class MapItem {
  constructor (obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
  }

  dx () {
    return this.x + this.width;
  }

  dy () {
    return this.y + this.height;
  }
}

export class DynamicItem extends MapItem {
  constructor (obj) {
    super(obj);
    this.speed = obj.speed || 0;
    this.jumpSpeed = obj.jump || 10;
    this.xdir = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.croach = false;
    this.xacc = 0;
    this.yacc = 0;
  }

  move () {
    if (this.dir) {
      if (!this.xspeed) this.xspeed = this.speed;
      this.x += this.dir * this.xspeed;
    }
    if (this.yspeed) this.y += this.yspeed;
    if (this.xacc) this.xspeed += this.xacc;
    if (this.yacc) this.yspeed += this.yacc;
  }

  jump () {
    if (!this.yacc) this.yspeed = this.jumpSpeed;
  }
}
