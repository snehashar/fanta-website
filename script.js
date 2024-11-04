var tl=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"0% 95%",
    end:"50% 50%",
    scrub:"true",
    
}})

tl.to("#fanta",{
    height:"60vh",
    top:"150%",
    left:"0%"
},'orange')
tl.to(".orangepeel",{
    height:"45vh",
    top:"170%",
    left:"20%"
},'orange')
 
tl.to(".orange",{
    height:"50vh",
    top:"198%",
    left:"70%"
},'orange')

tl.to(".leaf",{
    top:"140%",
    left:"81%"
},'orange')


var tl2=gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,

}})


tl2.to("#fanta",{
    width:"35%",
    top: "265%",
    left: "33%",
}, 'ca')

tl2.from(".cocacola",{
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".pepsi",{
    top: "110%",
    left: "100%",
}, 'ca')