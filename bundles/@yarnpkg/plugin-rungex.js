/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-rungex",
factory: function (require) {
var plugin=(()=>{var Le=Object.create;var S=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var Ne=Object.getOwnPropertyNames;var qe=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var v=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ge=(e,t)=>{for(var r in t)S(e,r,{get:t[r],enumerable:!0})},Q=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ne(t))!We.call(e,s)&&s!==r&&S(e,s,{get:()=>t[s],enumerable:!(n=Fe(t,s))||n.enumerable});return e};var J=(e,t,r)=>(r=e!=null?Le(qe(e)):{},Q(t||!e||!e.__esModule?S(r,"default",{value:e,enumerable:!0}):r,e)),ze=e=>Q(S({},"__esModule",{value:!0}),e);var te=b((Mt,ee)=>{"use strict";ee.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var _=b((Ot,re)=>{var C=te(),ne={};for(let e of Object.keys(C))ne[C[e]]=e;var c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};re.exports=c;for(let e of Object.keys(c)){if(!("channels"in c[e]))throw new Error("missing channels property: "+e);if(!("labels"in c[e]))throw new Error("missing channel labels property: "+e);if(c[e].labels.length!==c[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:t,labels:r}=c[e];delete c[e].channels,delete c[e].labels,Object.defineProperty(c[e],"channels",{value:t}),Object.defineProperty(c[e],"labels",{value:r})}c.rgb.hsl=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,s=Math.min(t,r,n),o=Math.max(t,r,n),i=o-s,l,a;o===s?l=0:t===o?l=(r-n)/i:r===o?l=2+(n-t)/i:n===o&&(l=4+(t-r)/i),l=Math.min(l*60,360),l<0&&(l+=360);let u=(s+o)/2;return o===s?a=0:u<=.5?a=i/(o+s):a=i/(2-o-s),[l,a*100,u*100]};c.rgb.hsv=function(e){let t,r,n,s,o,i=e[0]/255,l=e[1]/255,a=e[2]/255,u=Math.max(i,l,a),g=u-Math.min(i,l,a),f=function(_e){return(u-_e)/6/g+1/2};return g===0?(s=0,o=0):(o=g/u,t=f(i),r=f(l),n=f(a),i===u?s=n-r:l===u?s=1/3+t-n:a===u&&(s=2/3+r-t),s<0?s+=1:s>1&&(s-=1)),[s*360,o*100,u*100]};c.rgb.hwb=function(e){let t=e[0],r=e[1],n=e[2],s=c.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[s,o*100,n*100]};c.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,s=Math.min(1-t,1-r,1-n),o=(1-t-s)/(1-s)||0,i=(1-r-s)/(1-s)||0,l=(1-n-s)/(1-s)||0;return[o*100,i*100,l*100,s*100]};function De(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}c.rgb.keyword=function(e){let t=ne[e];if(t)return t;let r=1/0,n;for(let s of Object.keys(C)){let o=C[s],i=De(e,o);i<r&&(r=i,n=s)}return n};c.keyword.rgb=function(e){return C[e]};c.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;let s=t*.4124+r*.3576+n*.1805,o=t*.2126+r*.7152+n*.0722,i=t*.0193+r*.1192+n*.9505;return[s*100,o*100,i*100]};c.rgb.lab=function(e){let t=c.rgb.xyz(e),r=t[0],n=t[1],s=t[2];r/=95.047,n/=100,s/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;let o=116*n-16,i=500*(r-n),l=200*(n-s);return[o,i,l]};c.hsl.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100,s,o,i;if(r===0)return i=n*255,[i,i,i];n<.5?s=n*(1+r):s=n+r-n*r;let l=2*n-s,a=[0,0,0];for(let u=0;u<3;u++)o=t+1/3*-(u-1),o<0&&o++,o>1&&o--,6*o<1?i=l+(s-l)*6*o:2*o<1?i=s:3*o<2?i=l+(s-l)*(2/3-o)*6:i=l,a[u]=i*255;return a};c.hsl.hsv=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,s=r,o=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,s*=o<=1?o:2-o;let i=(n+r)/2,l=n===0?2*s/(o+s):2*r/(n+r);return[t,l*100,i*100]};c.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,n=e[2]/100,s=Math.floor(t)%6,o=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*o),a=255*n*(1-r*(1-o));switch(n*=255,s){case 0:return[n,a,i];case 1:return[l,n,i];case 2:return[i,n,a];case 3:return[i,l,n];case 4:return[a,i,n];case 5:return[n,i,l]}};c.hsv.hsl=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,s=Math.max(n,.01),o,i;i=(2-r)*n;let l=(2-r)*s;return o=r*s,o/=l<=1?l:2-l,o=o||0,i/=2,[t,o*100,i*100]};c.hwb.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100,s=r+n,o;s>1&&(r/=s,n/=s);let i=Math.floor(6*t),l=1-n;o=6*t-i,(i&1)!==0&&(o=1-o);let a=r+o*(l-r),u,g,f;switch(i){default:case 6:case 0:u=l,g=a,f=r;break;case 1:u=a,g=l,f=r;break;case 2:u=r,g=l,f=a;break;case 3:u=r,g=a,f=l;break;case 4:u=a,g=r,f=l;break;case 5:u=l,g=r,f=a;break}return[u*255,g*255,f*255]};c.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,s=e[3]/100,o=1-Math.min(1,t*(1-s)+s),i=1-Math.min(1,r*(1-s)+s),l=1-Math.min(1,n*(1-s)+s);return[o*255,i*255,l*255]};c.xyz.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,s,o,i;return s=t*3.2406+r*-1.5372+n*-.4986,o=t*-.9689+r*1.8758+n*.0415,i=t*.0557+r*-.204+n*1.057,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,s=Math.min(Math.max(0,s),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[s*255,o*255,i*255]};c.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;let s=116*r-16,o=500*(t-r),i=200*(r-n);return[s,o,i]};c.lab.xyz=function(e){let t=e[0],r=e[1],n=e[2],s,o,i;o=(t+16)/116,s=r/500+o,i=o-n/200;let l=o**3,a=s**3,u=i**3;return o=l>.008856?l:(o-16/116)/7.787,s=a>.008856?a:(s-16/116)/7.787,i=u>.008856?u:(i-16/116)/7.787,s*=95.047,o*=100,i*=108.883,[s,o,i]};c.lab.lch=function(e){let t=e[0],r=e[1],n=e[2],s;s=Math.atan2(n,r)*360/2/Math.PI,s<0&&(s+=360);let i=Math.sqrt(r*r+n*n);return[t,i,s]};c.lch.lab=function(e){let t=e[0],r=e[1],s=e[2]/360*2*Math.PI,o=r*Math.cos(s),i=r*Math.sin(s);return[t,o,i]};c.rgb.ansi16=function(e,t=null){let[r,n,s]=e,o=t===null?c.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),o===0)return 30;let i=30+(Math.round(s/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return o===2&&(i+=60),i};c.hsv.ansi16=function(e){return c.rgb.ansi16(c.hsv.rgb(e),e[2])};c.rgb.ansi256=function(e){let t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)};c.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let r=(~~(e>50)+1)*.5,n=(t&1)*r*255,s=(t>>1&1)*r*255,o=(t>>2&1)*r*255;return[n,s,o]};c.ansi256.rgb=function(e){if(e>=232){let o=(e-232)*10+8;return[o,o,o]}e-=16;let t,r=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255,s=t%6/5*255;return[r,n,s]};c.rgb.hex=function(e){let r=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r};c.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];t[0].length===3&&(r=r.split("").map(l=>l+l).join(""));let n=parseInt(r,16),s=n>>16&255,o=n>>8&255,i=n&255;return[s,o,i]};c.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,s=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),i=s-o,l,a;return i<1?l=o/(1-i):l=0,i<=0?a=0:s===t?a=(r-n)/i%6:s===r?a=2+(n-t)/i:a=4+(t-r)/i,a/=6,a%=1,[a*360,i*100,l*100]};c.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r),s=0;return n<1&&(s=(r-.5*n)/(1-n)),[e[0],n*100,s*100]};c.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=t*r,s=0;return n<1&&(s=(r-n)/(1-n)),[e[0],n*100,s*100]};c.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100;if(r===0)return[n*255,n*255,n*255];let s=[0,0,0],o=t%1*6,i=o%1,l=1-i,a=0;switch(Math.floor(o)){case 0:s[0]=1,s[1]=i,s[2]=0;break;case 1:s[0]=l,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=i;break;case 3:s[0]=0,s[1]=l,s[2]=1;break;case 4:s[0]=i,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=l}return a=(1-r)*n,[(r*s[0]+a)*255,(r*s[1]+a)*255,(r*s[2]+a)*255]};c.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t),s=0;return n>0&&(s=t/n),[e[0],s*100,n*100]};c.hcg.hsl=function(e){let t=e[1]/100,n=e[2]/100*(1-t)+.5*t,s=0;return n>0&&n<.5?s=t/(2*n):n>=.5&&n<1&&(s=t/(2*(1-n))),[e[0],s*100,n*100]};c.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t);return[e[0],(n-t)*100,(1-n)*100]};c.hwb.hcg=function(e){let t=e[1]/100,n=1-e[2]/100,s=n-t,o=0;return s<1&&(o=(n-s)/(1-s)),[e[0],s*100,o*100]};c.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};c.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};c.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};c.gray.hsl=function(e){return[0,0,e[0]]};c.gray.hsv=c.gray.hsl;c.gray.hwb=function(e){return[0,100,e[0]]};c.gray.cmyk=function(e){return[0,0,0,e[0]]};c.gray.lab=function(e){return[e[0],0,0]};c.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n};c.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}});var oe=b((Et,se)=>{var I=_();function Ue(){let e={},t=Object.keys(I);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}function Ye(e){let t=Ue(),r=[e];for(t[e].distance=0;r.length;){let n=r.pop(),s=Object.keys(I[n]);for(let o=s.length,i=0;i<o;i++){let l=s[i],a=t[l];a.distance===-1&&(a.distance=t[n].distance+1,a.parent=n,r.unshift(l))}}return t}function Ve(e,t){return function(r){return t(e(r))}}function Xe(e,t){let r=[t[e].parent,e],n=I[t[e].parent][e],s=t[e].parent;for(;t[s].parent;)r.unshift(t[s].parent),n=Ve(I[t[s].parent][s],n),s=t[s].parent;return n.conversion=r,n}se.exports=function(e){let t=Ye(e),r={},n=Object.keys(t);for(let s=n.length,o=0;o<s;o++){let i=n[o];t[i].parent!==null&&(r[i]=Xe(i,t))}return r}});var le=b((Ct,ie)=>{var L=_(),Ke=oe(),k={},He=Object.keys(L);function Qe(e){let t=function(...r){let n=r[0];return n==null?n:(n.length>1&&(r=n),e(r))};return"conversion"in e&&(t.conversion=e.conversion),t}function Je(e){let t=function(...r){let n=r[0];if(n==null)return n;n.length>1&&(r=n);let s=e(r);if(typeof s=="object")for(let o=s.length,i=0;i<o;i++)s[i]=Math.round(s[i]);return s};return"conversion"in e&&(t.conversion=e.conversion),t}He.forEach(e=>{k[e]={},Object.defineProperty(k[e],"channels",{value:L[e].channels}),Object.defineProperty(k[e],"labels",{value:L[e].labels});let t=Ke(e);Object.keys(t).forEach(n=>{let s=t[n];k[e][n]=Je(s),k[e][n].raw=Qe(s)})});ie.exports=k});var ge=b((Rt,fe)=>{"use strict";var ce=(e,t)=>(...r)=>`\x1B[${e(...r)+t}m`,ae=(e,t)=>(...r)=>{let n=e(...r);return`\x1B[${38+t};5;${n}m`},ue=(e,t)=>(...r)=>{let n=e(...r);return`\x1B[${38+t};2;${n[0]};${n[1]};${n[2]}m`},j=e=>e,he=(e,t,r)=>[e,t,r],x=(e,t,r)=>{Object.defineProperty(e,t,{get:()=>{let n=r();return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0}),n},enumerable:!0,configurable:!0})},F,M=(e,t,r,n)=>{F===void 0&&(F=le());let s=n?10:0,o={};for(let[i,l]of Object.entries(F)){let a=i==="ansi16"?"ansi":i;i===t?o[a]=e(r,s):typeof l=="object"&&(o[a]=e(l[t],s))}return o};function Ze(){let e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(let[r,n]of Object.entries(t)){for(let[s,o]of Object.entries(n))t[s]={open:`\x1B[${o[0]}m`,close:`\x1B[${o[1]}m`},n[s]=t[s],e.set(o[0],o[1]);Object.defineProperty(t,r,{value:n,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="\x1B[39m",t.bgColor.close="\x1B[49m",x(t.color,"ansi",()=>M(ce,"ansi16",j,!1)),x(t.color,"ansi256",()=>M(ae,"ansi256",j,!1)),x(t.color,"ansi16m",()=>M(ue,"rgb",he,!1)),x(t.bgColor,"ansi",()=>M(ce,"ansi16",j,!0)),x(t.bgColor,"ansi256",()=>M(ae,"ansi256",j,!0)),x(t.bgColor,"ansi16m",()=>M(ue,"rgb",he,!0)),t}Object.defineProperty(fe,"exports",{enumerable:!0,get:Ze})});var pe=b((St,de)=>{"use strict";de.exports=(e,t=process.argv)=>{let r=e.startsWith("-")?"":e.length===1?"-":"--",n=t.indexOf(r+e),s=t.indexOf("--");return n!==-1&&(s===-1||n<s)}});var ye=b((Bt,me)=>{"use strict";var et=v("os"),be=v("tty"),d=pe(),{env:h}=process,m;d("no-color")||d("no-colors")||d("color=false")||d("color=never")?m=0:(d("color")||d("colors")||d("color=true")||d("color=always"))&&(m=1);"FORCE_COLOR"in h&&(h.FORCE_COLOR==="true"?m=1:h.FORCE_COLOR==="false"?m=0:m=h.FORCE_COLOR.length===0?1:Math.min(parseInt(h.FORCE_COLOR,10),3));function N(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function q(e,t){if(m===0)return 0;if(d("color=16m")||d("color=full")||d("color=truecolor"))return 3;if(d("color=256"))return 2;if(e&&!t&&m===void 0)return 0;let r=m||0;if(h.TERM==="dumb")return r;if(process.platform==="win32"){let n=et.release().split(".");return Number(n[0])>=10&&Number(n[2])>=10586?Number(n[2])>=14931?3:2:1}if("CI"in h)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(n=>n in h)||h.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in h)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(h.TEAMCITY_VERSION)?1:0;if(h.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in h){let n=parseInt((h.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(h.TERM_PROGRAM){case"iTerm.app":return n>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(h.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(h.TERM)||"COLORTERM"in h?1:r}function tt(e){let t=q(e,e&&e.isTTY);return N(t)}me.exports={supportsColor:tt,stdout:N(q(!0,be.isatty(1))),stderr:N(q(!0,be.isatty(2)))}});var ve=b((It,we)=>{"use strict";var nt=(e,t,r)=>{let n=e.indexOf(t);if(n===-1)return e;let s=t.length,o=0,i="";do i+=e.substr(o,n-o)+t+r,o=n+s,n=e.indexOf(t,o);while(n!==-1);return i+=e.substr(o),i},rt=(e,t,r,n)=>{let s=0,o="";do{let i=e[n-1]==="\r";o+=e.substr(s,(i?n-1:n)-s)+t+(i?`\r
`:`
`)+r,s=n+1,n=e.indexOf(`
`,s)}while(n!==-1);return o+=e.substr(s),o};we.exports={stringReplaceAll:nt,stringEncaseCRLFWithFirstIndex:rt}});var Ee=b((jt,Oe)=>{"use strict";var st=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,ke=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,ot=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,it=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,lt=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function Me(e){let t=e[0]==="u",r=e[1]==="{";return t&&!r&&e.length===5||e[0]==="x"&&e.length===3?String.fromCharCode(parseInt(e.slice(1),16)):t&&r?String.fromCodePoint(parseInt(e.slice(2,-1),16)):lt.get(e)||e}function ct(e,t){let r=[],n=t.trim().split(/\s*,\s*/g),s;for(let o of n){let i=Number(o);if(!Number.isNaN(i))r.push(i);else if(s=o.match(ot))r.push(s[2].replace(it,(l,a,u)=>a?Me(a):u));else throw new Error(`Invalid Chalk template style argument: ${o} (in style '${e}')`)}return r}function at(e){ke.lastIndex=0;let t=[],r;for(;(r=ke.exec(e))!==null;){let n=r[1];if(r[2]){let s=ct(n,r[2]);t.push([n].concat(s))}else t.push([n])}return t}function xe(e,t){let r={};for(let s of t)for(let o of s.styles)r[o[0]]=s.inverse?null:o.slice(1);let n=e;for(let[s,o]of Object.entries(r))if(!!Array.isArray(o)){if(!(s in n))throw new Error(`Unknown Chalk style: ${s}`);n=o.length>0?n[s](...o):n[s]}return n}Oe.exports=(e,t)=>{let r=[],n=[],s=[];if(t.replace(st,(o,i,l,a,u,g)=>{if(i)s.push(Me(i));else if(a){let f=s.join("");s=[],n.push(r.length===0?f:xe(e,r)(f)),r.push({inverse:l,styles:at(a)})}else if(u){if(r.length===0)throw new Error("Found extraneous } in Chalk template literal");n.push(xe(e,r)(s.join(""))),s=[],r.pop()}else s.push(g)}),n.push(s.join("")),r.length>0){let o=`Chalk template literal is missing ${r.length} closing bracket${r.length===1?"":"s"} (\`}\`)`;throw new Error(o)}return n.join("")}});var Y=b((Tt,je)=>{"use strict";var R=ge(),{stdout:G,stderr:z}=ye(),{stringReplaceAll:ut,stringEncaseCRLFWithFirstIndex:ht}=ve(),{isArray:T}=Array,Re=["ansi","ansi","ansi256","ansi16m"],O=Object.create(null),ft=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let r=G?G.level:0;e.level=t.level===void 0?r:t.level},D=class{constructor(t){return Se(t)}},Se=e=>{let t={};return ft(t,e),t.template=(...r)=>Ie(t.template,...r),Object.setPrototypeOf(t,P.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=D,t.template};function P(e){return Se(e)}for(let[e,t]of Object.entries(R))O[e]={get(){let r=$(this,U(t.open,t.close,this._styler),this._isEmpty);return Object.defineProperty(this,e,{value:r}),r}};O.visible={get(){let e=$(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};var Be=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(let e of Be)O[e]={get(){let{level:t}=this;return function(...r){let n=U(R.color[Re[t]][e](...r),R.color.close,this._styler);return $(this,n,this._isEmpty)}}};for(let e of Be){let t="bg"+e[0].toUpperCase()+e.slice(1);O[t]={get(){let{level:r}=this;return function(...n){let s=U(R.bgColor[Re[r]][e](...n),R.bgColor.close,this._styler);return $(this,s,this._isEmpty)}}}}var gt=Object.defineProperties(()=>{},{...O,level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}}),U=(e,t,r)=>{let n,s;return r===void 0?(n=e,s=t):(n=r.openAll+e,s=t+r.closeAll),{open:e,close:t,openAll:n,closeAll:s,parent:r}},$=(e,t,r)=>{let n=(...s)=>T(s[0])&&T(s[0].raw)?Ce(n,Ie(n,...s)):Ce(n,s.length===1?""+s[0]:s.join(" "));return Object.setPrototypeOf(n,gt),n._generator=e,n._styler=t,n._isEmpty=r,n},Ce=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let r=e._styler;if(r===void 0)return t;let{openAll:n,closeAll:s}=r;if(t.indexOf("\x1B")!==-1)for(;r!==void 0;)t=ut(t,r.close,r.open),r=r.parent;let o=t.indexOf(`
`);return o!==-1&&(t=ht(t,s,n,o)),n+t+s},W,Ie=(e,...t)=>{let[r]=t;if(!T(r)||!T(r.raw))return t.join(" ");let n=t.slice(1),s=[r.raw[0]];for(let o=1;o<r.length;o++)s.push(String(n[o-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[o]));return W===void 0&&(W=Ee()),W(e,s.join(""))};Object.defineProperties(P.prototype,O);var A=P();A.supportsColor=G;A.stderr=P({level:z?z.level:0});A.stderr.supportsColor=z;je.exports=A});var yt={};Ge(yt,{default:()=>mt});var p=v("clipanion"),K=v("@yarnpkg/core");var Z=v("readline"),B=class{constructor(t){this.readlineInterface=(0,Z.createInterface)(t)}askQuestion(t){return new Promise(r=>{this.readlineInterface.pause(),this.readlineInterface.question(t,n=>{r({answer:n}),this.readlineInterface.close()})})}};var H=v("@yarnpkg/shell");var w=J(Y()),Te,V=60,Pe="DONE",$e=1,Ae=e=>Te||new X(e),X=class{constructor(t){this.logger=t}divider(t=w.default.white,r=V){this.logger.write(`${t("=").repeat(r)}
`)}newLine(t=1){this.logger.write(`
`.repeat(t))}bold(t){this.logger.write(`${w.default.bold(t)}
`)}info(t){this.logger.write(`${t}
`)}title(t,r=V){let n=(r-t.length)/2,s=" ".repeat(n);this.divider(w.default.blue,r),this.bold(`${s}${w.default.whiteBright(t)}`),this.divider(w.default.blue,r)}done(){let t=(V-Pe.length-$e*2)/2,r="=".repeat(t),n=" ".repeat($e);this.logger.write(w.default.red`${r}${n}{bold ${Pe}}${n}${r}\n`)}};var y=J(Y()),dt="rungex",pt={description:"Run multiple package.json scripts using Regex.",details:'This command will match package.json scripts with the inputted Regex string, prefix, or suffix. The user will then be prompted to run them if desired. The matched scripts could also be run in parallel to each other if the "-p" flag is specified. To skip the user prompt for running the matched scripts, the "-c" flag can be passed in.',examples:[['Run all scripts matching the Regex: "lint.*"','yarn rungex "lint.*"'],["Run all matching scripts in parallel",'yarn rungex "lint.*" -p'],['Run all scripts that start with "test"','yarn rungex "test" -sw'],['Run all scripts that end with "build"','yarn rungex "build" -ew'],["Run all scripts without user prompt",'yarn rungex "build" -c']]},E=class extends p.Command{constructor(){super(...arguments);this.scriptMatcher=p.Option.String({required:!0});this.ci=p.Option.Boolean("-c,--ci",!1);this.parallel=p.Option.Boolean("-p,--parallel",!1);this.startsWith=p.Option.Boolean("-sw,--starts-with",!1);this.endsWith=p.Option.Boolean("-ew,--ends-with",!1);this.matchedScripts=[]}async execute(){this.log=Ae(this.context.stdout),this.log.title("RUNGEX"),this.log.newLine(),this.validate();let r=await this.getMatchingScripts();return r!==-1?r:this.ci?await this.runMatchedScripts():await this.confirm()}validate(){if(this.startsWith&&this.endsWith)throw new p.UsageError('Invalid option schema: mutually exclusive properties "startsWith" and "endsWith"')}async getMatchingScripts(){let{fileName:r}=K.Manifest,{scripts:n}=await K.Manifest.fromFile(r);if(this.log.info(`Looking for scripts in ${r}...`),n.size===0)return this.log.info(y.default`{red There are no scripts defined in {bold ${r}}.}`),0;this.log.info(y.default`{green Found ${n.size} script${n.size>1?"s":""}!}\n`),this.log.info("Looking for matching scripts...");let s="";for(let o of n.keys()){let i=!1;if(this.startsWith?i=o.startsWith(this.scriptMatcher):this.endsWith?i=o.endsWith(this.scriptMatcher):i=!!o.match(this.scriptMatcher)?.length,i){let l=`yarn ${o}`;this.matchedScripts.push(l),s+=y.default`> {blue "${l}"}\n`}}return this.matchedScripts.length===0?(this.log.info(y.default`{red There were no matched scripts to run.}`),0):(this.log.info(y.default`{green Found ${this.matchedScripts.length} matched script${this.matchedScripts.length>1?"s":""}:}`),this.log.info(`${s}`),-1)}async confirm(){let r=new B({input:this.context.stdin,output:this.context.stdout}),{answer:n}=await r.askQuestion(y.default.bold`{red !} Do you want to run the matched script${this.matchedScripts.length>1?"s":""}? (y/N): `);return this.log.newLine(),["y","Y","yes","YES","Yes"].includes(n)?await this.runMatchedScripts():(this.log.info(y.default.bold.red`Aborting...`),0)}async runMatchedScripts(){let r=new Date().getTime();if(this.parallel){this.log.title("Running matched scripts in parallel");let s=this.matchedScripts.map(o=>(0,H.execute)(o));await Promise.all(s),this.log.done(),this.log.newLine()}else for(let s of this.matchedScripts)this.log.title(`Running "${s}"`),await(0,H.execute)(`${s} || true`),this.log.done(),this.log.newLine();let n=new Date().getTime()-r;return this.log.info(`Executed scripts in ${n/1e3}s`),0}};E.paths=[[dt]],E.usage=p.Command.Usage(pt);var bt={commands:[E]},mt=bt;return ze(yt);})();
return plugin;
}
};