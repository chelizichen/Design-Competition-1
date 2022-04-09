interface signin{
    name: string,
    isIll: boolean,
    desc?: string,
    where?:string,
    type:number,
    class_var?:string,
    id?:number,
}

export let signInStore:signin[] = [
    {   
        name:"彭城",
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:201910137816,
    },
]