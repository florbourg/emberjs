import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductButtonComponent extends Component {
  @service shopping;

  @action
  addToCart() {
    const { product } = this.args;
    this.shopping.addItem(product);
  }
}
