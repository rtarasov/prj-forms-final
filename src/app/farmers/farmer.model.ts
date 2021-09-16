import { Field } from '../shared/field.model';

export class Farmer {
  public name: string;
  public description: string;
  public imagePath: string;
  public fields: Field[];

  constructor(name: string, desc: string, imagePath: string, fields: Field[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.fields = fields;
  }
}
