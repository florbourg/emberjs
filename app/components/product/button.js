import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductButtonComponent extends Component {
  @service shopping;

  @action
  addToCart() {
    const { product } = this.args;

    const item = {
      name: product.name,
      image: product.image,
      price: product.price,
    };

    this.shopping.addItem(item);
  }
}
