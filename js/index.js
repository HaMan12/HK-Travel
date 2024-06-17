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
                title:'搭乘快線前往飯店',
                content:'搭乘香港快線至<br>(購買團體票1人約<span class="text-red">70HK</span>)<br>香港站<br>轉地鐵(中環出發價格約<span class="text-red">10~12HK</span>)<br>金鐘站轉線到紅磡站<br>步行8分鐘到飯店',
                image:'',
                
            },
            {
                title:'午餐(紅茶冰室 尖沙咀)',
                content:'飯店出發，步行約八分鐘',
                image:'../img/food1.jpg',
                link:'https://maps.app.goo.gl/MX8kbsG6829airc37',
            },
            {
                title:'逛商場 k11 海港城 ',
                content:'google 步行',
                image:'../img/k11.jpg'
            },
            {
                title:'故宮 15:00',
                content:'google 步行 <br> 可能需要搭計程車',
                image:'../img/故宮.jpg'
            },
            {
                title:'晚餐 棋子燒鵝(旺角)',
                content:'可能需要搭計程車',
                image:''
            },
            {
                title:'吃飽逛街',
                content:'',
                image:''
            },
            {
                title:'返回飯店',
                content:'',
                image:''
            },
        ])

        const tripsDay2 = reactive([
            {
                title:'搭乘地鐵前往迪士尼',
                content:'吃早餐<br>步行至紅磡站 > 南昌站(轉車) >換東涌線(黃線) >欣澳站(轉車) > 迪士尼 <br> 如果在沙尖咀 沙尖咀 > 荔景 >換東涌線(黃線) >欣澳站(轉車) > 迪士尼',
                image:'../img/港鐵.jpg',
                images:'../img/迪士尼.jpg',
            },
            {
                title:'回飯店',
                content:'回去躺平叫外送',
                image:'../img/港鐵.jpg',
            },
        ])

        const tripsDay3 = reactive([
            {
                title:'早午餐 我杯茶 ',
                content:'交通:紅磡站(東鐵線) > 金鐘站(轉港島線) > 灣仔',
                image:'../img/我杯茶.jpg',
            },
            {
                title:'Bakehouse 蛋塔 (灣仔店)',
                content:'香港有名蛋塔 可做伴手禮',
                image:'../img/蛋塔.jpg',
            },
            {
                title:'媽咪雞蛋仔 中環站',
                content:'推薦朱古力雞蛋仔',
                image:'../img/雞蛋仔.jpg',
            },
            {
                title:'晚餐 坤記煲仔飯 (西營盤站)',
                content:'晚餐搭地鐵到西營盤站後接步行',
                image:'../img/煲仔飯.png',
            },
            {
                title:'維多利亞夜景 20:30',
                content:'搭郵輪',
                image:'../img/維多利亞.jpg',
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
                image:'../img/澳洲牛奶公司.jpg',
            },
            {
                title:'午餐 點心到',
                content:'交通▹從尖沙咀站>油麻地 <br> 地址：油麻地佐敦廟街298號華志大廈地下',
                image:'../img/點心到.webp',
            },
            {
                title:'香港機場 都爹利會館',
                content:'可以吃吃看這間 <br> 注意:提前2小時抵達機場 逛免稅店',
                image:'../img/都爹利.jpg',
            },
        ])
        const selects = ref(null);
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
            selects.value = index;
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
            day,openModal,tripsDay1,selects,tripsDay2,openModal2,tripsDay3,openModal3,selects3,tripsDay4,selects4,openModal4,
            select,goback,openModals,openModals2,openModals3,openModals4
        }
    }
}).mount('#app');