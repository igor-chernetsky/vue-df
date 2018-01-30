import { Map } from '../entities/map';
import { MapItem, DynamicItem } from '../entities/mapItem';

export function getMap (hero) {
  const result = new Map(3000, 500);
  const ground = new MapItem({x: 0, y: 0, width: 1000, height: 100});
  const ground1 = new MapItem({x: 1000, y: 0, width: 1000, height: 60});
  const ground2 = new MapItem({x: 2000, y: 0, width: 500, height: 100});
  const ground3 = new MapItem({x: 2550, y: 0, width: 450, height: 90});
  const ground4 = new MapItem({x: 2650, y: 170, width: 150, height: 30});
  const ground5 = new MapItem({x: 2500, y: 270, width: 200, height: 30});
  const ground6 = new MapItem({x: 2700, y: 150, width: 200, height: 30});
  result.items.push(ground);
  result.items.push(ground1);
  result.items.push(ground2);
  result.items.push(ground3);
  result.items.push(ground4);
  result.items.push(ground5);
  result.items.push(ground6);
  result.hero = hero;
  return result;
}

export function getHero () {
  const hero = new DynamicItem({x: 100, y: 200, width: 25, height: 50, speed: 5});
  return hero;
}
