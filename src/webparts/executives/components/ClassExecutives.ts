import { IExecutives } from "./IExecutives";
export class ClassExecutives{
    public Title:string;
    public Name:string;
    public Role:string;
    public Description:string;
    public Picture:string;
   


    constructor(item: IExecutives){
        this.Title = item.Title;
        this.Name = item.Name;
        this.Role = item.Role;
        this.Description = item.Description;
        this.Picture = item.Picture;
       
    }
}