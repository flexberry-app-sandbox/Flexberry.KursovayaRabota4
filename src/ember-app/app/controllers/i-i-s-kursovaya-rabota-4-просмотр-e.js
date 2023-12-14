import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-4-просмотр-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-4-мет-мат+спрМатериалы':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'материал',
            required: true,
            relationName: 'спрМатериалы',
            projection: 'СпрМатериалыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
