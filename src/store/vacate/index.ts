/**
 * @vacateProgress 出校申请记录
 * 1 已经申请
 * 2 已经到达管理员
 * 3 申请成功
 * 0 申请失败
 * @vacateDest
 * 0 不出校
 * 1 出校
 */

export type vacateProgress = "0"|"1"|"2"|"3" 
export type vacateDest ="0"|"1" // 目的地 0 为不出校 1 为出校
export interface vacateType{
    progress:vacateProgress,
    name:string,
    type:vacateDest,
    desc:string,
}
export const vacateStore:vacateType[] = [
    {
        progress:'0',
        name:'彭城',
        type:'0',
        desc:''
    },
    {
        progress:'1',
        name:'彭城',
        type:'1',
        desc:''
    },
    {
        progress:'2',
        name:'彭城',
        type:'0',
        desc:''
    },
    {
        progress:'3',
        name:'彭城',
        type:'1',
        desc:''
    }
]