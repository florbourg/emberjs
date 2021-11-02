import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shopping;

  get itemCount() {
    return this.shopping.itemList.reduce((total, item) => {
      return (total += Number(item.count));
    }, 0);
  }
}
