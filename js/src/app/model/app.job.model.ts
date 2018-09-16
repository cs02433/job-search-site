class Job {
    title: string
    private _description: string
    private _thumbnail_url: string
    private _education_qualification: string
    private _experience: string
    private _pay: string
    private _procedure: string

    constructor(title: string) {
        this.title = title;
    }

    get description():string {
        return this._description;
    }

    set description(desc: string) {
        this._description = desc;
    }
    
    
    get thumbnail_url() : string {
        return this._thumbnail_url;
    }

    set thumbnail(v : string) {
        this._thumbnail_url = v;
    }

    
    get education_qualification() : string {
        return this._education_qualification;
    }

    
    set education_qualification(v : string) {
        this._education_qualification = v;
    }
    
    
    get experience() : string {
        return this._experience;
    }

    
    set experience(v : string) {
        this._experience = v;
    }

    get pay() : string {
        return this._pay;
    }

    
    set pay(v : string) {
        this._pay = v;
    }
    
    get procedure() : string {
        return this._procedure;
    }

    
    set procedure(v : string) {
        this._procedure = v;
    }
    
    

} 