import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

<<<<<<< HEAD
module('Integration | Component | rentals', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders all given rental properties by default', async function(assert) {
    this.setProperties({
      rentals: [{
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194
        },
        category: 'Estate',
        type: 'Standalone',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
      },
      {
        id: 'urban-living',
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        location: {
          lat: 47.6062,
          lng: -122.3321
        },
        category: 'Condo',
        type: 'Community',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
      },
      {
        id: 'downtown-charm',
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        location: {
          lat: 45.5175,
          lng: -122.6801
        },
        category: 'Apartment',
        type: 'Community',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
      }]
    });

    await render(hbs`<Rentals @rentals={{this.rentals}} />`);

    assert.dom('.rentals').exists();
    assert.dom('.rentals input').exists();

    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 3 });

    assert.dom('.rentals .results li:nth-of-type(1)').containsText('Grand Old Mansion');
    assert.dom('.rentals .results li:nth-of-type(2)').containsText('Urban Living');
    assert.dom('.rentals .results li:nth-of-type(3)').containsText('Downtown Charm');
=======
module('Unit | Model | rental', function(hooks) {
  setupTest(hooks);

  test('it has the right type', function(assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.equal(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.equal(rental.type, 'Community');

    rental.category = 'Townhouse';
    assert.equal(rental.type, 'Community');

    rental.category = 'Apartment';
    assert.equal(rental.type, 'Community');

    rental.category = 'Estate';
    assert.equal(rental.type, 'Standalone');
>>>>>>> dev
  });
});