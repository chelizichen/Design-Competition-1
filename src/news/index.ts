interface news{
    title:string,
    author:string,
    content1:string, // content 段落
    content2:string,
    content3:string,
    content4:string,
    content5?:string,
    content6?:string,
    content7?:string,
    index:number, // 索引
    pic1:any, // 图片地址
    pic2?:any,
    pic3?:any,
    pic4?:any,
}
import img1 from '../assets/news/1.jpeg'
import img2 from '../assets/news/2.jpeg'
import img3 from '../assets/news/3.png'
import img4 from '../assets/news/4.png'
import img5 from '../assets/news/5.jpeg'

export const newsStore:news[]=[
    {
        index:1,
        title:'校友会2022中国大学一流专业排名发布 我校跻身中国大学一流专业排名（应用型）50强',
        author:'发布时间：2022/4/6 15:37:44 作者：管理员 浏览次数：277',
        content1:'新闻网讯(记者张佳鑫)3月30日，全国第三方大学评价机构艾瑞深研究院校友会网(Cuaa.Net)发布了校友会2022中国大学一流专业排名、2022中国大学各专业类一流专业排名榜单。我校37个专业获赋星，跻身校友会2022中国大学一流专业排名(应用型)前50强。',
        content2:'在2022中国大学一流专业排名(应用型)中，我校工商管理、物流管理、英语、土木工程、护理学、电子商务、国际经济与贸易、电气工程及其自动化、机械设计制造及其自动化、计算机科学与技术10个专业获评6★专业，跻身中国顶尖应用型专业行列;信息与计算科学、城乡规划、服装与服饰设计、信息管理与信息系统、建筑学、环境工程、工程管理、视觉传达设计、环境设计、市场营销、财务管理、自动化、软件工程、会计学14个专业获评5★专业，跻身中国一流应用型专业行列;给排水科学与工程、人力资源管理、动画、日语、汽车服务工程、机械电子工程、应用化学7个专业获评4★专业，跻身中国高水平应用型专业;智能车辆工程、药物制剂、机器人工程、药学、工程造价、商务英语6个专业获评3★专业，跻身中国区域一流应用型专业。',
        content3:'艾瑞深研究院校友会网是得到社会各界认可的、有良好公信力的第三方大学评价咨询研究机构，已连续8年发布校友会中国大学一流专业排名。校友会2022年中国大学一流专业排名坚持实施“研究型”和“应用型”分类评价，并首次开展专业分档评价。其评价指标由学科水平、培养质量、师资水平、专业水平和专业影响等5大类构成，涵盖100多项指标。排名依据高校的星级专业数，采用奥运会奖牌榜的排序方法进行排序。',
        content4:'学校始终坚持“育人为本，德育为先”的教育理念，党建和思政工作成果突出。学校获评“武汉市文明单位”“武汉地区企事业单位平安建设优秀单位”荣誉称号。学校立足武汉城市圈、面向湖北产业群、辐射华中经济带来建学科专业，以培养新兴产业专门人才、现代服务产业骨干人才、现代制造产业技术人才和现代文化产业的创新人才“四类人才”为重点，为区域经济建设和社会发展培养高素质应用型技能型人才，培养了大批企业欢迎的复合型人才。学校鼓励学生多目标、多方向发展，与用人单位深度合作，共建实习基地，帮助毕业生通过实习实现就业，为社会进步增效赋能，毕业生广受社会认可与欢迎，学校的社会美誉度和影响力不断提高。',
        content5:"2022年，是“十四五”规划的关键之年，适逢学校20周年校庆，学校将继续秉持“励志修德、勤学创新”的校训精神，锐意进取，开拓创新，真抓实干，全面提升办学水平，推动学校高质量内涵式发展，创造高水平应用型民办大学建设新业绩向党的二十大献礼。",
        pic1:img1,
        pic2:img2,
        pic3:img3,
        pic4:img4,
    },
    {
        index:2,
        title:'新闻观察：疫情下运输物流如何保畅通',
        author:'来源：央视网 | 2022年04月12日 13:47:17',
        content1:'央视网消息：在全国本轮疫情的背景之下，多地高速实施管控，导致物流通行不畅。国务院联防联控机制11日发布通知，要求各地区、各部门全力保障货运物流畅通，特别是医疗防控物资、生活必需品、政府储备物资、邮政快递等民生物资和农业、能源、原材料等重要生产物资的运输畅通。',
        content2:'央视网消息：在全国本轮疫情的背景之下，多地高速实施管控，导致物流通行不畅。国务院联防联控机制11日发布通知，要求各地区、各部门全力保障货运物流畅通，特别是医疗防控物资、生活必需品、政府储备物资、邮政快递等民生物资和农业、能源、原材料等重要生产物资的运输畅通。',
        content3:'央视网消息：在全国本轮疫情的背景之下，多地高速实施管控，导致物流通行不畅。国务院联防联控机制11日发布通知，要求各地区、各部门全力保障货运物流畅通，特别是医疗防控物资、生活必需品、政府储备物资、邮政快递等民生物资和农业、能源、原材料等重要生产物资的运输畅通。',
        content4:'央视网消息：在全国本轮疫情的背景之下，多地高速实施管控，导致物流通行不畅。国务院联防联控机制11日发布通知，要求各地区、各部门全力保障货运物流畅通，特别是医疗防控物资、生活必需品、政府储备物资、邮政快递等民生物资和农业、能源、原材料等重要生产物资的运输畅通。',
        pic1:img5,

    }
]
