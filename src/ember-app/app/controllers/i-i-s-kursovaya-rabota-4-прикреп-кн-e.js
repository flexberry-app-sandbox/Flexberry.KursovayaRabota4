import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-4-прикреп-кн-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-4-баз-дан+спрСтуд':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фио студента',
            required: true,
            relationName: 'спрСтуд',
            projection: 'СпрСтудL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-rabota-4-баз-дан+спрМатериалы':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название материала',
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
