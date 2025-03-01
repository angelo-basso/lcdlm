export class Commitment {

  constructor(public title:string,public iconName:string, public iconSizeClassName:string='h-90px'){}

  public iconFilePath():string{
    return `icon/${this.iconName}.svg`;
  }
}
