import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
<<<<<<< HEAD

export default class RentalRoute extends Route {
    @service store;

    async model(params) {
        return this.store.find('rental', params.rental_id);
    }
  }
=======


export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find('rental', params.rental_id);
  }
}
>>>>>>> dev
