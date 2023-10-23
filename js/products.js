class Items{
    // itemNo，图片路径，色号，产品名
    constructor(itemNo,img,color,name) {
        this.itemNo = itemNo;
        this.img = img;
        this.color = color;
        this.name = name;
    }
}

Vue.component('product-component',{
    props: ['product'],
    template:
        `
        `
})

var app = new Vue({
    el: '#app',
    data: {
        visible: {
            // Christmas > Potted > Decorations
            christmas: false,
            potted: false,
            spring: false
        },
        content: '',
        products: {
            "Christmas": {
                "Branches & Leaves": [
                    // 2021年
                    new Items("DM21001","imgs/DM21圣诞产品图/DM21001.jpg","#G001","20.5 Oilseed fir with fruit Pendulous Branch"),
                    new Items("DM21002","imgs/DM21圣诞产品图/DM21002.jpg","#G001","29 Oilseed fir with fruit Pendulous Branch"),
                    new Items("DM21003","imgs/DM21圣诞产品图/DM21003.jpg","#G001","38.5 Oilseed fir with fruit Pendulous Branch"),
                    new Items("DM21004","imgs/DM21圣诞产品图/DM21004.jpg","#G001","20.5 Oilseed fir with dead wood Branch"),
                    new Items("DM21005","imgs/DM21圣诞产品图/DM21005.jpg","#G001","29 Oilseed fir with dead wood  Branch"),
                    new Items("DM21006","imgs/DM21圣诞产品图/DM21006.jpg","#G001","41 Oilseed fir with dead wood  Branch"),
                    new Items("DM21007", "imgs/DM21圣诞产品图/DM21007.jpg", "#G001", "33\" Oilseed fir with dead wood Water Drop"),
                    new Items("DM21008", "imgs/DM21圣诞产品图/DM21008.jpg", "#G001", "37\" Oilseed fir with dead wood cow horn"),
                    new Items("DM21009", "imgs/DM21圣诞产品图/DM21009.jpg", "#G001", "96\" Oilseed fir with dead wood Lintel"),
                    new Items("DM21010", "imgs/DM21圣诞产品图/DM21010.jpg", "#G001", "66\" Oilseed fir with dead wood Long Vine"),
                    new Items("DM21011", "imgs/DM21圣诞产品图/DM21011.jpg", "#G001", "23\" Oilseed fir with dead wood Circle"),
                    new Items("DM21012", "imgs/DM21圣诞产品图/DM21012.jpg", "#G001", "26\" Oilseed fir with dead wood Circle"),
                    new Items("DM21013", "imgs/DM21圣诞产品图/DM21013.jpg", "#G001", "30\" Oilseed fir with dead wood Tapered potted"),
                    new Items("DM21014", "imgs/DM21圣诞产品图/DM21014.jpg", "#G001", "22\" Oilseed fir with dead wood Tapered potted"),
                    new Items("DM21015", "imgs/DM21圣诞产品图/DM21015.jpg", "#G001", "23\" Oilseed fir with dead wood Candlestick"),
                    new Items("DM21016", "imgs/DM21圣诞产品图/DM21016.jpg", "#G001", "27\" Oilseed fir with dead wood Candlestick"),
                    new Items("DM21017", "imgs/DM21圣诞产品图/DM21017.jpg", "#G003", "24.5\" Willow fir pendulous Branch"),
                    new Items("DM21018", "imgs/DM21圣诞产品图/DM21018.jpg", "#G003", "34\" Willow fir pendulous Branch"),
                    new Items("DM21019", "imgs/DM21圣诞产品图/DM21019.jpg", "#G003", "45.5\" Willow fir pendulous Branch"),
                    new Items("DM21020", "imgs/DM21圣诞产品图/DM21020.jpg", "#G003", "27.5\" Willow fir with fruit pendulous Branch"),
                    new Items("DM21021", "imgs/DM21圣诞产品图/DM21021.jpg", "#G003", "36\" Willow fir with fruit pendulous Branch"),
                    new Items("DM21022", "imgs/DM21圣诞产品图/DM21022.jpg", "#G003", "43.5\" Willow fir with fruit pendulous Branch"),
                    new Items("DM21023", "imgs/DM21圣诞产品图/DM21023.jpg", "#G003", "23\" Willow fir with fruit Circle"),
                    new Items("DM21024", "imgs/DM21圣诞产品图/DM21024.jpg", "#G003", "26\" Willow fir with fruit Circle"),
                    new Items("DM21025", "imgs/DM21圣诞产品图/DM21025.jpg", "#G003", "36\" Willow fir with fruit cow horn"),
                    new Items("DM21026", "imgs/DM21圣诞产品图/DM21026.jpg", "#G003", "72\" Willow fir with fruit Long Vine"),
                    new Items("DM21027", "imgs/DM21圣诞产品图/DM21027.jpg", "#G003", "34.5\" Willow fir with fruit Water Drop"),
                    new Items("DM21028", "imgs/DM21圣诞产品图/DM21028.jpg", "#G003", "93\" Willow fir with fruit Lintel"),
                    new Items("DM21029", "imgs/DM21圣诞产品图/DM21029.jpg", "#G003", "21\" Willow fir with fruit Candlestick"),
                    new Items("DM21030", "imgs/DM21圣诞产品图/DM21030.jpg", "#G003", "29\" Willow fir with fruit Candlestick"),
                    new Items("DM21031", "imgs/DM21圣诞产品图/DM21031.jpg", "#G003", "28\" Willow fir Potted"),
                    new Items("DM21032", "imgs/DM21圣诞产品图/DM21032.jpg", "#G003", "34\" Willow fir Potted"),
                    new Items("DM21033", "imgs/DM21圣诞产品图/DM21033.jpg", "#G003", "40\" Willow fir Potted"),
                    new Items("DM21034", "imgs/DM21圣诞产品图/DM21034.jpg", "#G001;#G002", "20.5\" Oilseed fir Pendulous Branch"),
                    new Items("DM21035", "imgs/DM21圣诞产品图/DM21035.jpg", "#G002", "20.5\" Snowflake Oilseed fir Pendulous Branch"),
                    new Items("DM21036", "imgs/DM21圣诞产品图/DM21036.jpg", "#G002", "29\" Oilseed fir Pendulous Branch"),
                    new Items("DM21037", "imgs/DM21圣诞产品图/DM21037.jpg", "#G002", "29\" Snowflake Oilseed fir Pendulous Branch"),
                    new Items("DM21038", "imgs/DM21圣诞产品图/DM21038.jpg", "#G002", "38.5\" Oilseed fir Pendulous Branch"),
                    new Items("DM21039", "imgs/DM21圣诞产品图/DM21039.jpg", "#G004", "23\" Pinophyta Mixing Circle"),
                    new Items("DM21040", "imgs/DM21圣诞产品图/DM21040.jpg", "#G004", "26\" Pinophyta Mixing Circle"),
                    new Items("DM21041", "imgs/DM21圣诞产品图/DM21041.jpg", "#G004", "72\" Pinophyta Mixing Long Vine"),
                    new Items("DM21042", "imgs/DM21圣诞产品图/DM21042.jpg", "#G004", "22\" Pinophyta Mixing Candlestick"),
                    new Items("DM21043", "imgs/DM21圣诞产品图/DM21043.jpg", "#G004", "28\" Pinophyta Mixing Candlestick"),
                    new Items("DM21044", "imgs/DM21圣诞产品图/DM21044.jpg", "#G004", "35\" Pinophyta Mixing table decoration"),
                    new Items("DM21045", "imgs/DM21圣诞产品图/DM21045.jpg", "#G004", "35\"Pinophyta Mixing table decoration"),
                    new Items("DM21046", "imgs/DM21圣诞产品图/DM21046.jpg", "#G004", "22\"Pinophyta Mixing Potted"),
                    new Items("DM21047", "imgs/DM21圣诞产品图/DM21047.jpg", "#G004", "30\"Pinophyta Mixing Potted"),
                    new Items("DM21048", "imgs/DM21圣诞产品图/DM21048.jpg", "#G004", "29\"Pinophyta Mixing Water Drop"),
                    new Items("DM21049", "imgs/DM21圣诞产品图/DM21049.jpg", "#G001", "21\"Pinophyta with fruit Tapered Snowflake Potted"),
                    new Items("DM21050", "imgs/DM21圣诞产品图/DM21050.jpg", "#G001", "30\"Pinophyta with fruit Tapered Snowflake Potted"),
                    new Items("DM21051", "imgs/DM21圣诞产品图/DM21051.jpg", "#G005", "22\"Pinophyta with fruit Tapered Snowflake Circle"),
                    new Items("DM21052", "imgs/DM21圣诞产品图/DM21052.jpg", "#G005", "26\"Pinophyta with fruit Tapered Snowflake Circle"),
                    new Items("DM21053", "imgs/DM21圣诞产品图/DM21053.jpg", "#G005", "30\"Pinophyta with fruit Tapered Snowflake Water Drop"),
                    new Items("DM21054", "imgs/DM21圣诞产品图/DM21054.jpg", "#G005", "47\"Pinophyta with fruit Tapered Snowflake Water Drop"),
                    new Items("DM21055", "imgs/DM21圣诞产品图/DM21055.jpg", "#G005", "72\"Pinophyta with fruit Tapered Snowflake Long Vine"),
                    new Items("DM21056", "imgs/DM21圣诞产品图/DM21056.jpg", "#G005", "16\"Pinophyta with fruit Tapered Snowflake Candlestick"),
                    new Items("DM21057", "imgs/DM21圣诞产品图/DM21057.jpg", "#G005", "18\"Pinophyta with fruit Tapered Snowflake Candlestick"),
                    new Items("DM21058", "imgs/DM21圣诞产品图/DM21058.jpg", "#G006", "24\"Pinecones and red fruit loops"),
                    new Items("DM21059", "imgs/DM21圣诞产品图/DM21059.jpg", "#G006", "28\"Pinecones and red fruit loops"),
                    new Items("DM21060", "imgs/DM21圣诞产品图/DM21060.jpg", "#G006", "34\"Pinecones and red fruit Water Drop"),
                    new Items("DM21061", "imgs/DM21圣诞产品图/DM21061.jpg", "#G006", "36\"Pinecones and red fruit Water Drop"),
                    new Items("DM21062", "imgs/DM21圣诞产品图/DM21062.jpg", "#G006", "6\"Pinecones and red fruit Long Vine"),
                    new Items("DM21063", "imgs/DM21圣诞产品图/DM21063.jpg", "#G006", "20.5\"Pinecones and red fruit Tapered Potted"),
                    new Items("DM21064", "imgs/DM21圣诞产品图/DM21064.jpg", "#G006", "30\"Pinecones and red fruit Tapered Potted"),
                    new Items("DM21065", "imgs/DM21圣诞产品图/DM21065.jpg", "#G006", "18\"Pinecones and red fruit Candlestick"),
                    new Items("DM21066", "imgs/DM21圣诞产品图/DM21066.jpg", "#G006", "20\"Pinecones and red fruit Candlestick"),
                    new Items("DM21067", "imgs/DM21圣诞产品图/DM21067.jpg", "#G006", "22\"Pinecones and red fruit Candlestick"),
                    new Items("DM21068", "imgs/DM21圣诞产品图/DM21068.jpg", "#G003", "20\"Willow Fir Plus Fruit Candlestick"),
                    new Items("DM21069", "imgs/DM21圣诞产品图/DM21069.jpg", "#G006", "22\"Willow Fir Plus Fruit Candlestick"),
                    new Items("DM21070", "imgs/DM21圣诞产品图/DM21070.jpg", "#G006", "24\"Willow Fir Plus Fruit Candlestick"),
                    new Items("DM21071", "imgs/DM21圣诞产品图/DM21071.jpg", "#G006", "21\"Willow Fir Plus Fruit Tapered Potted"),
                    new Items("DM21072", "imgs/DM21圣诞产品图/DM21072.jpg", "#G006", "30.5\"Willow Fir Plus Fruit Tapered Potted"),
                    new Items("DM21073", "imgs/DM21圣诞产品图/DM21073.jpg", "#G006", "19\"Pine Potted"),
                    new Items("DM21074", "imgs/DM21圣诞产品图/DM21074.jpg", "#G006", "25\"Pine Potted"),
                    new Items("DM21075", "imgs/DM21圣诞产品图/DM21075.jpg", "#G006", "34\"Pine Potted"),
                    new Items("DM21076", "imgs/DM21圣诞产品图/DM21076.jpg", "#G006", "43.5\"Pine Potted"),
                    new Items("DM21077", "imgs/DM21圣诞产品图/DM21077.jpg", "#G006", "16\"Pine Potted"),
                    new Items("DM21078", "imgs/DM21圣诞产品图/DM21078.jpg", "#G006", "22\"Pine Potted"),
                    new Items("DM21079", "imgs/DM21圣诞产品图/DM21079.jpg", "#G006", "27\"Pine Potted"),
                    new Items("DM21080", "imgs/DM21圣诞产品图/DM21080.jpg", "#G006", "20\"Pine Branch"),
                    new Items("DM21081", "imgs/DM21圣诞产品图/DM21081.jpg", "#G006", "29\"Pine Branch"),
                    new Items("DM21082", "imgs/DM21圣诞产品图/DM21082.jpg", "#G006", "41\"Pine Branch"),
                    new Items("DM21083", "imgs/DM21圣诞产品图/DM21083.jpg", "#G006", "20\"Pine Pendulous Branch"),
                    new Items("DM21084", "imgs/DM21圣诞产品图/DM21084.jpg", "#G006", "27\"Pine Pendulous Branch"),
                    new Items("DM21085", "imgs/DM21圣诞产品图/DM21085.jpg", "#G006", "41\"Pine Pendulous Branch"),
                    new Items("DM21086", "imgs/DM21圣诞产品图/DM21086.jpg", "#G006", "24\"Oilseed fir Potted"),
                    new Items("DM21087", "imgs/DM21圣诞产品图/DM21087.jpg", "#G006", "32\"Oilseed fir Potted"),
                    new Items("DM21088", "imgs/DM21圣诞产品图/DM21088.jpg", "#G006", "39.5\"Oilseed fir Potted"),
                    new Items("DM21089", "imgs/DM21圣诞产品图/DM21089.jpg", "#G006", "24\"Chinese juniper Potted"),
                    new Items("DM21090", "imgs/DM21圣诞产品图/DM21090.jpg", "#G008", "32.5\"Chinese juniper Potted"),
                    new Items("DM21091", "imgs/DM21圣诞产品图/DM21091.jpg", "#G008", "41\"Chinese juniper Potted"),
                    new Items("DM21092", "imgs/DM21圣诞产品图/DM21092.jpg", "#G008", "23\"Chinese juniper Potted"),
                    new Items("DM21093", "imgs/DM21圣诞产品图/DM21093.jpg", "#G006", "27.5\"Chinese juniper Potted"),
                    new Items("DM21094", "imgs/DM21圣诞产品图/DM21094.jpg", "#G006", "36\"Chinese juniper Potted"),
                    new Items("DM21095", "imgs/DM21圣诞产品图/DM21095.jpg", "#G009", "23.5\"Chinese juniper Branch"),
                    new Items("DM21096", "imgs/DM21圣诞产品图/DM21096.jpg", "#G009", "23.5\"Chinese juniper with fruit Branch"),
                    new Items("DM21097", "imgs/DM21圣诞产品图/DM21097.jpg", "#G008", "32\"Chinese juniper with fruit Branch"),
                    new Items("DM21098", "imgs/DM21圣诞产品图/DM21098.jpg", "#G008", "44\"Chinese juniper with fruit Branch"),
                    new Items("DM21099", "imgs/DM21圣诞产品图/DM21099.jpg", "#G008", "24.5\"Chinese juniper with fruit Pendulous Branch"),
                    new Items("DM21100", "imgs/DM21圣诞产品图/DM21100.jpg", "#G008", "31\"Chinese juniper with fruit Pendulous Branch"),
                    new Items("DM21101", "imgs/DM21圣诞产品图/DM21101.jpg", "#G008", "41\"Chinese juniper with fruit Pendulous Branch"),
                    new Items("DM21102", "imgs/DM21圣诞产品图/DM21102.jpg", "#G007", "20\"Pine with fruit Branch"),
                    new Items("DM21103", "imgs/DM21圣诞产品图/DM21103.jpg", "#G006", "20\"Pine with fruit Pendulous Branch"),
                    new Items("DM21104", "imgs/DM21圣诞产品图/DM21104.jpg", "#G006", "27\"Pine Pendulous Branch"),
                    new Items("DM21105", "imgs/DM21圣诞产品图/DM21105.jpg", "#G006", "41\"Pine Pendulous Branch"),
                    new Items("DM21106", "imgs/DM21圣诞产品图/DM21106.jpg", "#G006", "19\"Pine with fruit Snowflake Potted"),
                    new Items("DM21107", "imgs/DM21圣诞产品图/DM21107.jpg", "#G006", "25\"Pine with fruit Snowflake Potted"),
                    new Items("DM21108", "imgs/DM21圣诞产品图/DM21108.jpg", "#B001", "17\"Tree bark cone"),
                    new Items("DM21109", "imgs/DM21圣诞产品图/DM21109.jpg", "#B001", "25\"Tree bark cone"),
                    new Items("DM21110", "imgs/DM21圣诞产品图/DM21110.jpg", "#B001", "3.5\"Tree bark basin"),
                    new Items("DM21111", "imgs/DM21圣诞产品图/DM21111.jpg", "#B001", "4.5\"Tree bark basin"),
                    new Items("DM21112", "imgs/DM21圣诞产品图/DM21112.jpg", "#B001", "5\"Tree bark basin"),
                    new Items("DM21113", "imgs/DM21圣诞产品图/DM21113.jpg", "#B001", "5.5\"Tree bark basin"),
                    new Items("DM21114", "imgs/DM21圣诞产品图/DM21114.jpg", "#B001", "6.5\"Tree bark basin"),
                    new Items("DM21115", "imgs/DM21圣诞产品图/DM21115.jpg", "#B001", "8.5\"Tree bark basin"),
                    new Items("DM21116", "imgs/DM21圣诞产品图/DM21116.jpg", "#B001", "5\"Bark Basin Set"),
                    new Items("DM21117", "imgs/DM21圣诞产品图/DM21117.jpg", "#B001", "8.5\"Bark Basin Set"),
                    new Items("DM21118", "imgs/DM21圣诞产品图/DM21118.jpg", "#B001", "36\"Tree bark"),
                    new Items("DM21119", "imgs/DM21圣诞产品图/DM21119.jpg", "#B001", "72\"Tree bark"),
                    new Items("DM21120", "imgs/DM21圣诞产品图/DM21120.jpg", "#B001", "23.5\"Tree bark"),
                    new Items("DM21121", "imgs/DM21圣诞产品图/DM21121.jpg", "#B001", "27.5\"Tree bark"),
                    new Items("DM21122", "imgs/DM21圣诞产品图/DM21122.jpg", "#B001", "36\"Tree bark"),
                    new Items("DM21123", "imgs/DM21圣诞产品图/DM21123.jpg", "#B001", "72\"Tree bark"),
                    new Items("DM21124", "imgs/DM21圣诞产品图/DM21124.jpg", "#B002", "4\"Lichens Ball"),
                    new Items("DM21125", "imgs/DM21圣诞产品图/DM21125.jpg", "#B002", "5\"Lichens Ball"),
                    new Items("DM21126", "imgs/DM21圣诞产品图/DM21126.jpg", "#B002", "6.5\"Lichens Ball"),
                    new Items("DM21127", "imgs/DM21圣诞产品图/DM21127.jpg", "#B002", "12.5\"Lichens Cone"),
                    new Items("DM21128", "imgs/DM21圣诞产品图/DM21128.jpg", "#B002", "17\"Lichens Cone"),
                    new Items("DM21129", "imgs/DM21圣诞产品图/DM21129.jpg", "#B002", "25\"Lichens Cone"),
                    new Items("DM21130", "imgs/DM21圣诞产品图/DM21130.jpg", "#B002", "3.5\"Lichens Cone"),
                    new Items("DM21131", "imgs/DM21圣诞产品图/DM21131.jpg", "#B002", "4.5\"Lichens Basin"),
                    new Items("DM21132", "imgs/DM21圣诞产品图/DM21132.jpg", "#B002", "5\"Lichens Basin"),
                    new Items("DM21133", "imgs/DM21圣诞产品图/DM21133.jpg", "#B002", "5\"Lichens Basin"),
                    new Items("DM21134", "imgs/DM21圣诞产品图/DM21134.jpg", "#B002", "5\"Lichens Basin Set"),
                    new Items("DM21135", "imgs/DM21圣诞产品图/DM21135.jpg", "#B002", "6.5\"Lichens Basin"),
                    new Items("DM21136", "imgs/DM21圣诞产品图/DM21136.jpg", "#B002", "5\"Lichens Basin Set"),
                    new Items("DM21137", "imgs/DM21圣诞产品图/DM21137.jpg", "#B002", "8.5\"Lichens Basin Set"),
                    new Items("DM21138", "imgs/DM21圣诞产品图/DM21138.jpg", "#R001", "24\"circle of red fruit"),
                    new Items("DM21139", "imgs/DM21圣诞产品图/DM21139.jpg", "#R001", "28\"circle of red fruit"),
                    new Items("DM21140", "imgs/DM21圣诞产品图/DM21140.jpg", "#R001", "32\"circle of red fruit"),
                    new Items("DM21141", "imgs/DM21圣诞产品图/DM21141.jpg", "#R001", "36\"cone of red fruit"),
                    new Items("DM21142", "imgs/DM21圣诞产品图/DM21142.jpg", "#R001", "6''Red Fruit Vine"),
                    new Items("DM21143", "imgs/DM21圣诞产品图/DM21143.jpg", "#R001", "12''Red Fruit Vine"),
                    new Items("DM21144", "imgs/DM21圣诞产品图/DM21144.jpg", "#R002", "Ф200Twine and Bubble Ball"),
                    new Items("DM21145", "imgs/DM21圣诞产品图/DM21145.jpg", "#R002", "Ф150Twine and Bubble Ball"),
                    new Items("DM21146", "imgs/DM21圣诞产品图/DM21146.jpg", "#R002", "Ф120Twine and Bubble Ball"),
                    new Items("DM21147", "imgs/DM21圣诞产品图/DM21147.jpg", "#R002", "Ф90Twine and Bubble Ball"),
                    new Items("DM21148", "imgs/DM21圣诞产品图/DM21148.jpg", "#R002", "Ф200Bubble Ball"),
                    new Items("DM21149", "imgs/DM21圣诞产品图/DM21149.jpg", "#R002", "Ф15Bubble Ball"),
                    new Items("DM21150", "imgs/DM21圣诞产品图/DM21150.jpg", "#R002", "Ф120Bubble Ball"),
                    new Items("DM21151", "imgs/DM21圣诞产品图/DM21151.jpg", "#R002", "Ф90Bubble Ball"),
                    new Items("DM21152", "imgs/DM21圣诞产品图/DM21152.jpg", "#R002", "Ф12.5Bubble Ball"),
                    new Items("DM21153", "imgs/DM21圣诞产品图/DM21153.jpg", "#R002", "Ф16.5Bubble Ball"),
                    new Items("DM21154", "imgs/DM21圣诞产品图/DM21154.jpg", "#R002", "Ф24.5Bubble Ball"),
                    new Items("DM21155", "imgs/DM21圣诞产品图/DM21155.jpg", "G14050", "6\"Bubble Ball Charm"),
                    new Items("DM21156", "imgs/DM21圣诞产品图/DM21156.jpg", "#G14050", "6\"Ice Bubble Ball Charm"),
                    new Items("DM21157", "imgs/DM21圣诞产品图/DM21157.jpg", "#R001", "22\"Red Fruit Branch"),
                    new Items("DM21158", "imgs/DM21圣诞产品图/DM21158.jpg", "#R001", "33\"Red Fruit Branch"),
                    new Items("DM21159", "imgs/DM21圣诞产品图/DM21159.jpg", "#R001", "41\"Red Fruit Branch"),
                    new Items("DM21160", "imgs/DM21圣诞产品图/DM21160.jpg", "#R001", "36\"Red Fruit Vine"),
                    new Items("DM21161", "imgs/DM21圣诞产品图/DM21161.jpg", "#R001", "48\"Red Fruit Vine"),
                    new Items("DM21162", "imgs/DM21圣诞产品图/DM21162.jpg", "#R001", "23\"Red Fruit Pendulous Branch"),
                    new Items("DM21163", "imgs/DM21圣诞产品图/DM21163.jpg", "#R001", "30\"Red Fruit Pendulous Branch")
                ],
                "Potted": ["a", "b", "c"],
                "Decorations": [],
                "Others": []
            },
            Spring: {
                "Floral":[],
                "Foliage":[],
                "Potted":[],
                "Fruit & Berries":[],
                "Statuary":[]
            }
        }
    },
    methods: {
        menuVisibility: function (menuName) {
            if (menuName === "Christmas") {
                this.visible.christmas = !this.visible.christmas;
                this.content = '';
            }
            else if (menuName === "Potted") {
                this.visible.potted = !this.visible.potted;
            }
            else if (menuName === "Spring") {
                this.visible.spring = !this.visible.spring;
            }
        },
        getMenu: function (menuName) {
            console.log(menuName);
            return menuName;
        }
    }
})