import { Map } from '../entities/map';
import { MapItem, DynamicItem } from '../entities/mapItem';

export function getMap (hero) {
  const result = new Map(3000, 500);
  const ground = new MapItem({x: 0, y: 0, width: 1000, height: 100});
  const ground1 = new MapItem({x: 1000, y: 0, width: 1000, height: 60});
  const ground2 = new MapItem({x: 2000, y: 0, width: 500, height: 100});
  result.items.push(ground);
  result.items.push(ground1);
  result.items.push(ground2);
  result.hero = hero;
  return result;
}

export function getHero () {
  const hero = new DynamicItem({x: 100, y: 200, width: 25, height: 50, speed: 3});
  return hero;
}
