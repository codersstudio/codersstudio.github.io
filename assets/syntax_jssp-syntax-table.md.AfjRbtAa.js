import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CVSRuG3h.js";const c=JSON.parse('{"title":"Table 설계","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"syntax/jssp-syntax-table.md","filePath":"syntax/jssp-syntax-table.md"}'),h={name:"syntax/jssp-syntax-table.md"},l=n(`<h1 id="table-설계" tabindex="-1">Table 설계 <a class="header-anchor" href="#table-설계" aria-label="Permalink to &quot;Table 설계&quot;">​</a></h1><p>코더스는 데이터베이스 테이블 을 설계할 수 있는 문법을 제공합니다. Oracle, MySQL, MsSQL 과 같은 대중적인 DBMS 구문보다 쉬운 문법을 제공하고 이를 DBMS 에 맞게 변환합니다.</p><h2 id="domain" tabindex="-1">Domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;Domain&quot;">​</a></h2><p>도메인은 테이블 컬럼의 데이터타입을 일관되게 유지하기 위한 개념입니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;사용자 아이디&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bigint;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;사용자 이메일&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Email</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;사용자 닉네임&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nickname</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;이미지 URL&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>위와 같이 정의를 하고 다음과 같이 적용할 수 있습니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table user {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    email </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nickname </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nickname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>user 테이블은 user_id, email, nickname 컬럼을 정의하였습니다.</p><h2 id="table-정의" tabindex="-1">Table 정의 <a class="header-anchor" href="#table-정의" aria-label="Permalink to &quot;Table 정의&quot;">​</a></h2><p>코더스에서 테이블을 정의하면 설정한 데이터베이스 DDL 문으로 변환합니다. 테이블에는 Primary Key, Foreign Key, Index 를 설정할 수 있습니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table user {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    email </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Email</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nickname </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Nickname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    unique index (email, user_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    index (nickname);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table user_item {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    item_id </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ItemID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    item_name </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_id, item_id);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_id) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>user 테이블은 user_id 가 primary key 입니다. email 컬럼에 Unique 인덱스를 생성합니다. nickname 컬럼은 인덱스를 생성합니다. user_item 테이블은 사용자가 여러개의 아이템을 소유할 수 있는 구조를 보여줍니다. user_id 컬럼은 user와 Foreign Key 관계로 연결되어 있습니다. 코더스에서는 link A to B 형식으로 작성하면 됩니다.</p><h2 id="auto-increment" tabindex="-1">Auto Increment <a class="header-anchor" href="#auto-increment" aria-label="Permalink to &quot;Auto Increment&quot;">​</a></h2><p>MySQL 에는 auto_increment 컬럼이 있습니다. 이 컬럼은 삽입이 될 때마다 증가되는 컬럼입니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;공지사항&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;공지사항&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table notice {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;공지사항 번호&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;공지사항 번호&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    notice_no auto;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    create_at datetime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CURREMT_TIMESTAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    update_at datetime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CURREMT_TIMESTAMP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(notice_no);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>코더스는 위와 같이 auto 키워드를 사용하면 auto_increment 컬럼으로 자동으로 변환합니다.</p><blockquote><p>auto 키워드는 는 Oracle에서는 동작하지 않습니다. sequence를 권장합니다.</p></blockquote><h2 id="sequence" tabindex="-1">Sequence <a class="header-anchor" href="#sequence" aria-label="Permalink to &quot;Sequence&quot;">​</a></h2><p>Sequence 는 자동 증가를 위한 객체를 의미합니다. Oracle에는 Sequence 객체를 지원합니다. 코더스에서는 다양한 DBMS에 Sequence를 지원하기 위한 구문을 제공합니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[table</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;post_num&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequence post {}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">handler writeNotice {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    func </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> @sequence</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.post.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>@sequence.post.next() 구문은 다음 번호를 리턴할 것입니다. MySQL 은 auto_increment 컬럼을 지원하지만 다른 DBMS 는 그렇지 않습니다. 코더스에서 제공하는 sequence를 사용하면 대부분 DBMS에서 가능하도록 변환합니다.</p><h2 id="data-정의" tabindex="-1">Data 정의 <a class="header-anchor" href="#data-정의" aria-label="Permalink to &quot;Data 정의&quot;">​</a></h2><p>데이터베이스를 설계하고 나면 미리 정의된 데이터를 삽입해야 하는 경우가 있습니다.</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table user_type {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_type integer;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_type);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user_type) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;사용자&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;관리자&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>코더스는 위와 같이 \`data&#39; 키워드를 사용하면 미리 정의된 데이터를 insert 쿼리로 변환해 줍니다.</p>`,25),t=[l];function p(e,k,E,r,d,g){return a(),i("div",null,t)}const F=s(h,[["render",p]]);export{c as __pageData,F as default};
