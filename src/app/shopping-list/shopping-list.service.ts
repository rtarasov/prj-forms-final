import { Field } from '../shared/field.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  fieldsChanged = new Subject<Field[]>();
  startedEditing = new Subject<number>();
  private fields: Field[] = [
    new Field('Apples', 5),
    new Field('Tomatoes', 10),
  ];

  getFields() {
    return this.fields.slice();
  }

  getField(index: number) {
    return this.fields[index];
  }

  addField(field: Field) {
    this.fields.push(field);
    this.fieldsChanged.next(this.fields.slice());
  }

  addFields(fields: Field[]) {
    // for (let field of fields) {
    //   this.addField(field);
    // }
    this.fields.push(...fields);
    this.fieldsChanged.next(this.fields.slice());
  }

  updateField(index: number, newField: Field) {
    this.fields[index] = newField;
    this.fieldsChanged.next(this.fields.slice());
  }

  deleteField(index: number) {
    this.fields.splice(index, 1);
    this.fieldsChanged.next(this.fields.slice());
  }
}
