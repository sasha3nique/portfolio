function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function copy(text, ttip) {
    var copyText = document.getElementById(text);
    copyText.select();
    document.execCommand("copy");
    
    var tooltip = document.getElementById(ttip);
    tooltip.innerHTML = "Скопировано!";
    setTimeout(function(){
        tooltip.innerHTML = "Скопировать";
    }, 5000)
}
function outFunc(ttip) {
    var tooltip = document.getElementById(ttip);
    tooltip.innerHTML = "Скопировать в буфер обмена";
}

let vm = new Vue({
    el: '#root',
    data: {
        fullname: 'Дядченко Александр',
        nickname: 'sasha3nique',
        shortInfo: '19-летний студент, начинающий веб разработчик',
        email: 'alexander.diadchenko@gmail.com',
        telephone: '0987179936',
        pages: {
            mainPage: true,
            portfolioPage: false,
            skillsPage: false,
            mePage: false
        },
        me: {
            text: `
                Любимые вещи: скейтборд, географая, тишина, молочные сосиски и саундтрек первого дарк соулса ( тема Гвина, Повелителя Пепла - удивительный факт: поскольку Гвин - это воплощение светла, в игре не используются черные клавиши пианино) <br>
                <a href="https://www.last.fm/user/whitearmor_" target="_blank">Мой профиль на last.fm</a>
            `
        }



    },
    computed: {
        getNickname: function() {
            return `a.k.a. ${this.nickname}` 
        },
    },
    methods: {
        switchPage: function(page) {
            for (let [key, val] of Object.entries(this.pages)) {
                if (key!=page) {
                    this.pages[key]=false;
                } else {
                    this.pages[key]=true;
                }
            }
        },
        startAnim: function() {
                // setInterval(function f() {
                //     let el = document.getElementById('skateboard');
                //     el.style.filter = `hue-rotate(${rnd(10,720)}deg)`;
                //     listOfTricks = ['kickflip', 'ollie', 'lateflip', 'manual'];
                //     let rnd_n = rnd(0,3);
                //     el.style.animationName = listOfTricks[rnd_n];
                // }, 4000);
        }
    }
});

let counter = 0;
for (let val of document.getElementsByClassName('tab')) {
    counter-=15;
    val.style.left = counter + 'px';
}



