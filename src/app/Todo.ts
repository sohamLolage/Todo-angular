export class Todo{
    srNo:number ;
    title:string;
    desc:string;
    active:boolean;
    constructor(srno:number,title:string,desc:string,active:boolean){
        this.srNo=srno;
        this.title=title;
        this.desc=desc;
        this.active=active;
    } 

}