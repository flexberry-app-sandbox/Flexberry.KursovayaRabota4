import { Serializer as СпрПреподSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-4-спр-препод';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрПреподSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
