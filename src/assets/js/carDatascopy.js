// 新享计划数据
//方案A
let newCarDatas =[
    {
        id:1,
        carKind:'ATS-L',//车型
        kinds:'28T技术型',//车款
        msrp:'298800',//零售价
        price:'205000',//总价
        luoPrice:'205000',//建议零售价
        qxmonth:'36',//期限（月）
        sf:'20%',//首付
        sfmoney:'41000',
        dkje:'164000',//贷款金额
        wk:'70650',//尾款
      	rate:'8.98%',//利率
      	tiemonth:'3496',//贴息前月供
      	tiemoney:'32518',//贴息前利息
      	sgm:'17890',//SGM贴息金额
      	weiRate:'34.5%',//尾款比率
      	userRate:'4.08%',//客户利率
      	userMonth:'2999',//客户支付月供
      	userMoney:'14629',//客户利息
      	userSumMon:'219628'//客户买断总支出  
    },
       {
        id:2,
        carKind:'XTS',//车型
        kinds:'28T技术型',//车款
        msrp:'299000',//零售价
        price:'235000',//总价
        luoPrice:'235000',//建议零售价
        qxmonth:'36',//期限（月）
        sf:'20%',//首付
        sfmoney:'47000',
        dkje:'188000',//贷款金额
        wk:'75000',//尾款
      	rate:'8.98%',//利率
      	tiemonth:'4154',//贴息前月供
      	tiemoney:'36528',//贴息前利息
      	sgm:'9508',//SGM贴息金额
      	weiRate:'31.9%',//尾款比率
      	userRate:'6.67%',//客户利率
      	userMonth:'3889',//客户支付月供
      	userMoney:'27020',//客户利息
      	userSumMon:'262020'//客户买断总支出  
    }
];
//方案B
let newCarDatasB =[
    {
        id:1,
        gzs:'18000',//购置税
        instu:'8500',//保险
        carKind:'ATS-L',//车型
        kinds:'28T技术型',//车款
        msrp:'298800',//零售价
        price:'231500',//总价
        luoPrice:'205000',//建议零售价
        qxmonth:'36',//期限（月）
        sf:'20%',//首付
        sfmoney:'46300',
        dkje:'185200',//贷款金额
        wk:'104797',//尾款
      	rate:'8.98%',//利率
      	tiemonth:'3496',//贴息前月供
      	tiemoney:'32518',//贴息前利息
      	sgm:'17890',//SGM贴息金额
      	weiRate:'34.5%',//尾款比率
      	userRate:'4.51%',//客户利率
      	userMonth:'2843',//客户支付月供
      	userMoney:'14629',//客户利息
      	userSumMon:'219628'//客户买断总支出  
    },
       {
        id:2,
         gzs:'20400',//购置税
        instu:'8500',//保险
        carKind:'XTS',//车型
        kinds:'28T技术型',//车款
        msrp:'299000',//零售价
        price:'263900',//总价
        luoPrice:'235000',//建议零售价
        qxmonth:'36',//期限（月）
        sf:'20%',//首付
        sfmoney:'52780',
        dkje:'211120',//贷款金额
        wk:'109201',//尾款
      	rate:'8.98%',//利率
      	tiemonth:'4154',//贴息前月供
      	tiemoney:'36528',//贴息前利息
      	sgm:'9508',//SGM贴息金额
      	weiRate:'31.9%',//尾款比率
      	userRate:'7.07%',//客户利率
      	userMonth:'3793',//客户支付月供
      	userMoney:'27020',//客户利息
      	userSumMon:'262020'//客户买断总支出  
    }
]

export default{
    newCarDatas,
    newCarDatasB
}