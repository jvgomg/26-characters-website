
var count=document.createElement('script');count.type='text/javascript';count.async=true;count.src='//hello.myfonts.net/count/272273';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if(typeof(woffEnabled)=='undefined'){var woffEnabled=true;}
var svgEnabled=0;if(typeof(customPath)!='undefined'){var path=customPath;}
else
{var scripts=document.getElementsByTagName("SCRIPT");var script=scripts[scripts.length-1].src;if(!script.match("://")&&script.charAt(0)!='/')
script="./"+script;var path=script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/,'');}
var wfpath=path+"/webfonts/";var browsers=[{'regex':'MSIE (\\d+\\.\\d+)','versionRegex':'new Number(RegExp.$1)','type':[{"version":9.0,"type":"woff"},{"version":5.0,"type":"eot"}]},{'regex':'Firefox[\/\s](\\d+\\.\\d+)','versionRegex':'new Number(RegExp.$1)','type':[{"version":3.6,"type":"woff"},{"version":3.5,"type":"ttf"}]},{'regex':'Chrome\/(\\d+\\.\\d+)','versionRegex':'new Number(RegExp.$1)','type':[{"version":6.0,"type":"woff"},{"version":4.0,"type":"ttf"}]},{'regex':'Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari','versionRegex':'new Number(RegExp.$1)','type':[{"version":4.1,"type":"woff"},{"version":3.1,"type":"svg#wf"},{"version":2.2,"type":"ttf"}]},{'regex':'Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari','versionRegex':"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)","unhinted":true,'type':[{"version":5.0,"type":"woff"},{"version":4.2,"type":"ttf"},{"version":1.0,"type":"svg#wf"}]},{'regex':'Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari','versionRegex':'1.0','type':[{"version":1.0,"type":"svg#wf"}]},{'regex':'Version\/(\\d+\\.\\d+)(\\.\\d+)? Safari\/(\\d+\\.\\d+)','versionRegex':'new Number(RegExp.$1)','type':[{"version":5.1,"type":"woff"},{"version":3.1,"type":"ttf"}]},{'regex':'Opera\/(\\d+\\.\\d+)(\.+)Version\/(\\d+\\.\\d+)(\\.\\d+)?','versionRegex':'new Number(RegExp.$3)','type':[{"version":11.1,"type":"woff"},{"version":10.1,"type":"ttf"}]},]
var browLen=browsers.length;var suffix="";out:for(i=0;i<browLen;i++){var regex=new RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++){if(browserVersion>=browsers[i].type[j].version){if(browsers[i].unhinted==true){suffix="_unhinted";}
webfontType=browsers[i].type[j].type;if(webfontType=="woff"&&!woffEnabled){continue;}
else if(webfontType=="svg#wf"&&!svgEnabled){continue;}
else{break out;}}}}}
if(/(Macintosh|Android)/.test(navigator.userAgent)&&webfontType!="svg#wf")
suffix="_unhinted";var fonts=[{"fontFamily":"Karben105Mono","fontWeight":"normal","fontStyle":"italic","url":wfpath+"272273_0"+suffix+"_0."+webfontType},{"fontFamily":"Karben105Mono","fontWeight":"normal","fontStyle":"normal","url":wfpath+"272273_1"+suffix+"_0."+webfontType}];var len=fonts.length;document.write("<style>");for(var i=0;i<len;i++){if(webfontType=="svg#wf"){var format="svg";}
else if(webfontType=="ttf"){var format="truetype";}
else if(webfontType=="eot"){var format="embedded-opentype";}
else{var format=webfontType;}
var fontface="@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+") format(\""+format+"\");";document.write(fontface);if(fonts[i].fontWeight){document.write("font-weight: "+fonts[i].fontWeight+";");}
if(fonts[i].fontStyle){document.write("font-style: "+fonts[i].fontStyle+";");}
document.write("}");}
document.write("</style>");