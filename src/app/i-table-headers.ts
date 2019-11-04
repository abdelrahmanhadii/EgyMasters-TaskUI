export class ITableHeaders {
    constructor(
        public headers =
        [ 
            {key:'id', ar:'الكود', en:'Code', exist:true},
            {key:'name', ar:'اسم العميل', en:'', exist:true},
            {key:'residence', ar:'العنوان', en:'', exist:true},
            {key:'description', ar:'توصيف', en:'', exist:true},
            {key:'salesMan', ar:'رجل المبيعات', en:'', exist:true},
            {key:'clientSource', ar:'مصدر العميل', en:'', exist:true},
            {key:'clientClassfication', ar:'تصنيف العميل', en:'', exist:true},
            {key:'telephone1', ar:'تليفون 1', en:'', exist:true},
            {key:'telephone2', ar:'تليفون 2', en:'', exist:true},
            {key:'mobile', ar:'موبايل', en:'', exist:true},
            {key:'whatsapp', ar:'واتساب', en:'', exist:true},
            {key:'email', ar:'ايميل', en:'', exist:true}]){
    }
}
