export interface courseType{
    courseName:string, // 课程 名
    courseId:string, // 课程 编号
    core:number, // 课程分数
    studentId:string, // 选修的学生编号
    isChoose:boolean,// 是否已选修
    isMakeUp:boolean,// 是否申请补考
}
export const courseStore:courseType[] = [
    {
        courseName:"数据结构",
        courseId:'001',
        core:90,
        studentId:'201910137816',
        isChoose:true,
        isMakeUp:false,
    },
    {
        courseName:"算法分析与设计",
        courseId:'002',
        core:70,
        studentId:'201910137816',
        isChoose:true,
        isMakeUp:false,
    },
    {
        courseName:"单片机原理与技术",
        courseId:'003',
        core:0,
        studentId:'201910137816',
        isChoose:false,
        isMakeUp:false,
        
    },
    {
        courseName:"网页设计",
        courseId:'004',
        core:57,
        studentId:'201910137816',
        isChoose:true,
        isMakeUp:false,
    },
    {
        courseName:"网页设计",
        courseId:'004',
        core:50,
        studentId:'202110207404',
        isChoose:true,
        isMakeUp:false,
    },
    {
        courseName:'高等数学',
        courseId:'005',
        core:59,
        studentId:'202110137509',
        isChoose:true,
        isMakeUp:true,
    },
    {
        courseName:'大学英语',
        courseId:'006',
        core:70,
        studentId:'202110137509',
        isChoose:true,
        isMakeUp:true,
    }

]