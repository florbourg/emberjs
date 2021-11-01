import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 11 }, { price: 11 }];
    return items;
  }
}
