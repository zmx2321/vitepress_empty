import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.6b305f6c.js";const u=JSON.parse('{"title":"Vue学习笔记-调试测试","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/vue.md","filePath":"other/tutorial/vue.md","lastUpdated":1698212363000}'),p={name:"other/tutorial/vue.md"},e=l(`<h1 id="vue学习笔记-调试测试" tabindex="-1">Vue学习笔记-调试测试 <a class="header-anchor" href="#vue学习笔记-调试测试" aria-label="Permalink to &quot;Vue学习笔记-调试测试&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">VNode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    class: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: </span><span style="color:#9ECBFF;">&#39;我是文本&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 render 渲染函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vnode</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 根据 type 生成 element</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ele</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(vnode.type)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 把 props 中的 class 赋值给 ele 的 className</span></span>
<span class="line"><span style="color:#E1E4E8;">  ele.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vnode.props.class</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 把 children 赋值给 ele 的 innerText</span></span>
<span class="line"><span style="color:#E1E4E8;">  ele.innerText </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vnode.children</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 把 ele 作为子节点插入 body 中</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(ele)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(VNode)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">VNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  type: </span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    class: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: </span><span style="color:#032F62;">&#39;我是文本&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建 render 渲染函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vnode</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 根据 type 生成 element</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ele</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(vnode.type)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 把 props 中的 class 赋值给 ele 的 className</span></span>
<span class="line"><span style="color:#24292E;">  ele.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vnode.props.class</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 把 children 赋值给 ele 的 innerText</span></span>
<span class="line"><span style="color:#24292E;">  ele.innerText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vnode.children</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 把 ele 作为子节点插入 body 中</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(ele)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(VNode)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),o=[e];function c(r,t,E,i,y,d){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
