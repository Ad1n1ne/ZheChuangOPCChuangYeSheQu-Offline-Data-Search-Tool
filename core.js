/* 离线资料检索工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const docs=[...(d.items||[]),...(d._files?.texts||[]).map(f=>({title:f.name,source:f.name,body:f.text}))].filter(x=>String(x.body||'').trim());if(!docs.length)throw Error('请添加至少一条非空资料');const terms=String(d.query||'').toLocaleLowerCase().split(/\s+/).filter(Boolean),found=docs.filter(r=>terms.every(t=>(r.title+' '+r.body+' '+r.source).toLocaleLowerCase().includes(t)));
 return {metrics:[metric('资料总数',docs.length),metric('当前命中',found.length)],columns:['标题','来源','原文'],rows:found.map(x=>[x.title,x.source,x.body]),view:{kind:'search',title:d.title,docs,query:d.query},notes:found.length?[]:['没有匹配结果，请减少关键词或检查资料。']};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
