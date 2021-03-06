export interface studentType
{
    name:string,
    department:string,
    major:string,
    class_var:string,
    id:string,
}

export let studentStore :studentType[] = [
    {
        name:'彭城',
        department:'信工',
        major:'计算机科学与技术',
        class_var:'八班',
        id:'201910137816'
    },
    {
        name:'刘忠玉',
        department:'信工',
        major:'计算机应用技术',
        class_var:'四班',
        id:'20211010328'
    },    
    {
        name:'章三',
        department:'信工',
        major:'软件工程',
        class_var:'五班',
        id:'202010138732'
    },    
    {
        name:'李四',
        department:'信工',
        major:'信息科学',
        class_var:'四班',
        id:'20221013173'
    },
    {
        name:'王利娜',
        department:'信工',
        major:'计算机科学与技术',
        class_var:'五班',
        id:'202110137509'
    },

]