/**
 * @bookId 图书ID string
 * @bookName 图书名 string
 * @isBook 是否预定 boolean
 * @isBorrow 是否借阅 boolean
 * @author 作者 string
 */
export interface bookType
{
    bookId:string, 
    bookName:string,
    isBook:boolean,
    isBorrow:boolean,
    author:string,
}

export const bookStore:bookType[] = [
    {
        bookId:'001', 
        bookName:'诗经',
        isBook:false,
        isBorrow:false,
        author:'佚名',
    },
    {
        bookId:'002', 
        bookName:'山海经',
        isBook:false,
        isBorrow:false,
        author:'大禹'
    },
    {
        bookId:'003', 
        bookName:'资治通鉴',
        isBook:false,
        isBorrow:false,
        author:'司马光'
    },
    {
        bookId:'004', 
        bookName:'苏东坡传',
        isBook:false,
        isBorrow:false,
        author:'林语堂'
    },
    {
        bookId:'005', 
        bookName:'书5',
        isBook:true,
        isBorrow:false,
        author:'佚名'
    },
    {
        bookId:'006', 
        bookName:'书6',
        isBook:false,
        isBorrow:true,
        author:'佚名'
    },
]