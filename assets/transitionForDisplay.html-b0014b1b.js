import{_ as n,p as a,q as s,R as t,t as e}from"./framework-5866ffd3.js";const i={},o=t("h1",{id:"transition对display不生效",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#transition对display不生效","aria-hidden":"true"},"#"),e(" transition对display不生效")],-1),r=t("p",null,[e("原因："),t("code",null,"display:none"),e("页面文档流中将不会存在该元素，"),t("code",null,"display:block"),e("的时候，文档流中才存在该元素。transition属性无法对一个从无到有的元素进行过渡显示")],-1),l=[o,r];function c(d,_){return a(),s("div",null,l)}const h=n(i,[["render",c],["__file","transitionForDisplay.html.vue"]]);export{h as default};
