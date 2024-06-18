const { createApp, ref, onMounted, reactive, computed, watch, watchEffect } = Vue;

createApp({
    setup(){
        const day = ref('0')
        const select = (idx) =>{
            day.value = idx
        }
        const goback = ()=>{
            day.value = '0'
        }

        // 行程
        const tripsDay1 = reactive([
            {
                title:'領取八達通',
                content:'領取地點：接機大堂Ａ-Ａ13櫃檯<br>辦理入境手續：請準備好紙本港簽、護照',
                image:'',
                link:'https://www.kkday.com/zh-tw/product/8962'
                
            },
            {
                title:'搭乘快線前往飯店',
                content:'搭乘香港快線至<br>(購買團體票1人約<span class="text-red">70HK</span>)<br>香港站<br>轉地鐵(中環出發價格約<span class="text-red">10~12HK</span>)<br>金鐘站轉線到紅磡站<br>Ａ1出口出來，走過天橋，路程約8分鐘',
                image:'',
                
            },
            {
                title:'午餐(紅茶冰室 尖沙咀)',
                content:'飯店出發，步行約八分鐘',
                image:'./img/food1.jpg',
                link:'https://maps.app.goo.gl/MX8kbsG6829airc37',
            },
            {
                title:'逛商場 k11 海港城 ',
                content:'google 步行',
                image:'./img/k11.jpg'
            },
            {
                title:'故宮 15:00',
                content:'搭乘Uber，約港幣<span class="text-red">55.05元</span>（231元台幣），車程10分鐘',
                image:'./img/故宮.jpg',
                link:'https://www.kkday.com/zh-hk/product/137778-hong-kong-palace-museum-ticketing'
            },
            {
                title:'晚餐 棋子燒鵝(旺角)',
                content:'車資:<span class="text-red">54元</span>港幣（車程8分鐘）',
                image:'./img/旗子燒鵝.jpg'
            },
            {
                title:'廟街夜市',
                content:'車資:<span class="text-red">53.27元</span>港幣（車程9分鐘）',
                image:''
            },
            {
                title:'返回飯店',
                content:'棋子燒鵝：走路12分鐘，抵達飯店廟街夜市：走路22分鐘，抵達飯店，搭乘Uber約<span class="text-red">57.74元</span>港幣，7分鐘抵達',
                image:''
            },
        ])

        const tripsDay2 = reactive([
            {
                title:'搭乘地鐵前往迪士尼',
                content:'早上：飯店用餐 或 叫外送平台，享用飯店設施<br>步行至紅磡站 > 南昌站(轉車) >換東涌線(黃線) >欣澳站(轉車) > 迪士尼 <br> 如果在沙尖咀 沙尖咀 > 荔景 >換東涌線(黃線) >欣澳站(轉車) > 迪士尼',
                image:'./img/港鐵.jpg',
                images:'./img/迪士尼.jpg',               
            },
            {
                title:'迪士尼',
                content:'20:00 左右 會有星夢光影之旅',
                image:'',
                link:'https://tw.trip.com/guide/attraction/%E9%A6%99%E6%B8%AF%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%A8%82%E5%9C%92%E9%96%80%E7%A5%A8.html'
            },
            {
                title:'返回唯港薈（飯店）休息',
                content:'晚餐：路上買或使用外送平台，在飯店用餐',
                image:'./img/港鐵.jpg',
            },
        ])

        const tripsDay3 = reactive([
            {
                title:'早午餐 我杯茶 ',
                content:'交通:紅磡站(東鐵線) > 金鐘站(轉港島線) > 灣仔',
                image:'./img/我杯茶.jpg',
            },
            {
                title:'Bakehouse 蛋塔 (灣仔店)',
                content:'香港有名蛋塔 可做伴手禮',
                image:'./img/蛋塔.jpg',
            },
            {
                title:'大館 中環站',
                content:'門票：免費<br>步行至灣仔站，搭乘港島線至中環站，步行約6分鐘',
                image:'',
            },
            {
                title:'石板街 中環站',
                content:'從大館步行約4分鐘',
                image:'',
            },
            {
                title:'檸檬王',
                content:'從石板街步行約5分鐘',
                image:'',
            },
            {
                title:'珍妮曲奇聰明小熊',
                content:'從檸檬王步行約2分鐘',
                image:'',
            },
            {
                title:'媽咪雞蛋仔 中環站',
                content:'從石板街步行約2分鐘',
                image:'./img/雞蛋仔.jpg',
            },
            {
                title:'晚餐 坤記煲仔飯 (西營盤站)',
                content:'從中環站搭乘港島線 , 晚餐搭地鐵到西營盤站後接步行',
                image:'./img/煲仔飯.png',
            },
            {
                title:'維多利亞夜景 20:30',
                content:'搭郵輪，九龍公眾碼頭四號梯台集合',
                image:'./img/維多利亞.jpg',
                link:'https://www.kkday.com/zh-tw/product/163120'
            },
            {
                title:'回飯店休息',
                content:'',
                image:'',
            },
        ])

        const tripsDay4 = reactive([
            {
                title:'早餐  澳洲牛奶公司',
                content:'從尖沙咀站>佐敦<br>▹推薦：⁡⁡炒蛋吐司(必點5顆星)/燉奶 (只收現金 吐司要請他烘底)',
                image:'./img/澳洲牛奶公司.jpg',
            },
            {
                title:'午餐 點心到',
                content:'交通▹從尖沙咀站>油麻地 <br> 地址：油麻地佐敦廟街298號華志大廈地下',
                image:'./img/點心到.webp',
            },
            {
                title:'香港機場',
                content:'15:15-17:45辦理出境手續，準備好紙本港簽跟護照，逛香港機場<br>17:45-18:15登機準備回台灣',
                image:'./img/都爹利.jpg',
            },
        ])
        const selects = ref(null);
        const selects2 = ref(null);
        const selects3 = ref(null);
        const selects4 = ref(null);
        const openModal=ref(false)
        const openModal2=ref(false)
        const openModal3=ref(false)
        const openModal4=ref(false)
        const openModals= (index) =>{
            selects.value = index;
            openModal.value = true;
        }
        const openModals2= (index) =>{
            selects2.value = index;
            openModal.value = false;
            openModal2.value = true;
        }
        const openModals3 = (index) => {
            selects3.value = index;
            openModal3.value = true;
        };
        const openModals4 = (index) => {
            selects4.value = index;
            openModal4.value = true;
        };
        
        onMounted(()=>{
            AOS.init();
        })
        return{
            day,openModal,tripsDay1,selects,tripsDay2,openModal2,tripsDay3,openModal3,selects3,tripsDay4,selects4,openModal4,selects2,
            select,goback,openModals,openModals2,openModals3,openModals4
        }
    }
}).mount('#app');