interface signin{
    name: string,
    isIll: boolean,
    desc?: string,
    where?:string,
    type:number,
    class_var?:string,
    id?:number,
    date:string,
    content:string
}
/**
 * @param {type}  1 班级签到 2 寝室签到 3 定位签到
 */
export let signInStore:signin[] = [
    {   
        name:"彭城",
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:201910137816,
        date: '2022-04-01', 
        content: '✔️' 
    },
    {   
        name:"彭城",
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:201910137816,
        date: '2022-04-02', 
        content: '✔️' 
    },
    {   
        name:"彭城",
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:201910137816,
        date: '2022-04-03', 
        content: '✔️' 
    },
    {   
        name:"彭城",
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:201910137816,
        date: '2022-04-04', 
        content: '✔️' 
    },
    {
        name:'王利娜',
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:3,
        id:202110137509,
        date: '2022-04-04', 
        content: '✔️' 
    },
    {
        name:'王利娜',
        isIll:false,
        desc:"无",
        where:"武汉市",
        type:2,
        id:202110137509,
        date: '2022-04-10', 
        content: '✔️' 
    },

]