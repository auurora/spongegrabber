// WARNING: Inconsistent and crappy code ahead, I don't like javascript



let current_generator = undefined;

let images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mintytoys.com%2Fassets%2Fimages%2F9a77b0db2eef1cf0f892263d232ab5a5.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fe52140fc-f159-47c1-8fe8-f94aab3e791e_1.57fe301436aa8758188987501a420989.jpeg%3FodnHeight%3D450%26odnWidth%3D450%26odnBg%3Dffffff&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20110617070013%2Flego%2Fimages%2F0%2F08%2FBob023.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F20%2F9e%2F82%2F209e822fc2f4c99584bd05804a91ef2f.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Ffc086e00-6c01-4f21-a777-c9387d4658eb_1.95f145c577645eac8910a1dd1cbf3a1b.jpeg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20120118162411%2Flego%2Fimages%2F4%2F48%2FSpongebob_Party.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Ff7bb5bfe-5473-4157-be15-b3da03e50f62_1.709146bb47e81457bcc258f18dd3dcf8.jpeg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.thinglink.me%2Fapi%2Fimage%2F875354822637780994%2F1024%2F10%2Fscaletowidth%2F0%2F0%2F1%2F1%2Ffalse%2Ftrue%3Fwait%3Dtrue&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7375244.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fauxx.me%2Fwp-content%2Fuploads%2F2019%2F04%2F12.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.wikia.com%2Fspongebob%2Fimages%2F6%2F66%2FPlankton-spongebob.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F08%2Fsquidward.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FmbCQR43vRLsCgF4GHZLY9UpEHIoJWJOCaKKArsUAlOM.png%3Fauto%3Dwebp%26s%3D4ea49de41b2511e6068343eebeeaf7a2528423d8&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F-Jsj29z71sdg%2FVB4JK9yt_nI%2FAAAAAAAAAxU%2FwoeVimwAnMI%2Fs640%2Fblogger-image--591054007.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fy.yarn.co%2F7025baf8-74c5-4e4d-9c73-f0f13e7fdd9a_thumb.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ff3G8yEU8ksA%2Fmaxresdefault.jpg&f=1&nofb=1",
];
let music = [
    "https://archive.org/download/OMFGILoveYou/OMFG%20-%20I%20Love%20You.mp3",
    "https://archive.org/download/OMFGHello_20150908/OMFG%20-%20Hello.mp3",
    "https://www.incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3",
    "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Balloon%20Game.mp3",
    "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Future%20Gladiator.mp3",

];

let id = (idx) => document.getElementById(idx);

let remove = (node) => node.parentNode.removeChild(node); 

let create = (tag, classname, parent) => 
{
    let element = document.createElement(tag);
    element.className = classname;

    if (parent)
    {
        parent.appendChild(element);
    }

    return element;
}

let div = (classname, parent) => create("div", classname, parent);
let span = (classname, parent) => {
    let le = create("span", classname, parent);
    let fonts = 
    [
        "Impact, Fantasy, Serif",
        "Comic Sans MS, Noto Serif Malayalam Black, sans-serif",
        "Segoe UI Light, Noto Serif Display Thin, Verdana, Arial, serif",
        "Papyrus, sans-serif",
        "Times New Roman, serif"
    ]
    if (Math.random() < 0.14)
    {
        le.style.textDecoration = Math.random() < 0.5 ? "underline" : (Math.random() < 0.5 ? "overline" : "line-through");
    }
    if (Math.random() < 0.10)
    {
        le.style.letterSpacing = `${(Math.random()-0.2) * 0.3}em`;
    }
    if (Math.random() < 0.15)
    {
        le.style.fontStyle = "italic";
    }
    if (Math.random() < 0.13)
    {
        le.style.fontWeight = "bold";
    }
    le.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    return le;
}

let get_image = () => images[Math.floor(Math.random() * images.length)];
let get_music = () => music[Math.floor(Math.random() * music.length)];

let bgsizes = [
    "cover",
    "100% 100%",
    "cover",
    "100% 100%",
    "cover",
    "100% 100%",
    "contain",
    "200% 100%",
    "100% 200%",
];
let getbgsize = () => bgsizes[Math.floor(Math.random() * bgsizes.length)];

class text_generator
{
    constructor()
    {
        this.ip = window.ip || "127.0.0.1";
    }
    start(parent)
    {}
};

class background_generator 
{
    constructor()
    {
        this.img = get_image();
    }
    start(parent)
    {}
}


class bouncing_text extends text_generator
{
    start(parent)
    {}
}

class slide_text extends text_generator
{
    start(parent)
    {
        let txt = span("txt slide", parent);
        txt.textContent = this.ip;
        txt.style.animationDuration = `${(Math.random() * 6) + 2}s`;
        txt.style.fontSize = `${(Math.random() * 4) + 8}em`;
    }
}

class coin_spin_text extends text_generator
{
    start(parent)
    {
        let txt = span("txt coin_spin", parent);
        txt.textContent = this.ip;
        txt.style.animationDuration = `${(Math.random() * 6) + 2}s`;
        txt.style.fontSize = `${(Math.random() * 4) + 8}em`;
    }
}

class flip_background extends background_generator
{
    start(parent)
    {
        let bg = div("flip bg", parent);
        bg.style.backgroundImage = `url(${this.img})`;
        bg.style.backgroundSize = getbgsize();
        bg.style.backgroundRepeat = "no-repeat";
    }
}
class slight_turn_background extends background_generator
{
    start(parent)
    {
        let bg = div("slight_turn bg", parent);
        bg.style.backgroundImage = `url(${this.img})`;
        bg.style.backgroundSize = getbgsize();
        bg.style.backgroundRepeat = "no-repeat";
    }
}
class coin_spin_background extends background_generator
{
    start(parent)
    {
        let bg = div("coin_spin bg", parent);
        bg.style.backgroundImage = `url(${this.img})`;
        bg.style.backgroundSize = getbgsize();
        bg.style.backgroundRepeat = "no-repeat";
    }
}

let text_generators = [coin_spin_text, slide_text];
let background_generators = [flip_background, slight_turn_background, coin_spin_background];

let get_textgen = () => text_generators[Math.floor(Math.random() * text_generators.length)];
let get_bggen = () => background_generators[Math.floor(Math.random() * background_generators.length)];

class sponge_generator
{
    constructor()
    {
        let audio = create("audio", "hidden_audio");
        audio.id = "song";
        audio.src = get_music();
        audio.loop = true;
        audio.controls = "none";
        audio.autoplay = true;
        document.body.appendChild(audio);

        this.master = div("master", document.body);

        (new (get_bggen())).start(this.master);
        (new (get_textgen())).start(this.master);
    }

    destroy()
    {
        remove(this.master);
        if (id("song"))
        {
            remove(id("song"));
        }
    }
}


window.addEventListener('load', () =>
{
    console.log("%cSpongeGrabber!\nClick to Visit on GitHub", "color: #23a5e4; font-size: 1.7em");
    console.info("%chttps://github.com/auurora/spongegrabber", "font-size: 1.2em");
    console.log("%cNOTE (for monkeys):\nThis site is harmless it doesn't store anything", "color: #ff0000; font-size: 1.3em");

    window.setInterval(()=>{
        let el = document.getElementsByClassName("txt");
        for (let i = 0; i < el.length; i++)
        {
            el[i].style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        }
    }, 100);
});

window.addEventListener('click', () => 
{
    let ip = window.ip || "127.0.0.1";
    let titles = 
    [
        `Whats up ${ip}!`,
        `Get trolled ${ip}`,
        `You've been sponged!`,
        `${ip}`,
        `${ip} was PatTricked`,
        `Squidded!`,
        `This chum has been bucketed`,
        `Argh Argh Planktin ${ip}`
    ];


    document.title = titles[Math.floor(Math.random() * titles.length)];

    if (current_generator)
    {
        current_generator.destroy();
    } 

    current_generator = new sponge_generator;
});