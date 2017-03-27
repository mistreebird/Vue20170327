Vue.component('tb-articles', {
    template: '<div id="ctl00_cphBody_PostList1_posts" class="posts">\
                        <template v-for="(artilce,index) in artilces">\
                            <article class="post" id="post0" >\
                            <header class="post-header">\
                                <h2 class="post-title">\
                                    <a :href="artilce.href">{{index + "." + artilce.title}}</a>\
                                </h2>\
                            </header>\
                            <section class="post-body text">\
                                <p>{{artilce.summary}}</p>\
                                <p>... <a class="more" :href="artilce.href">繼續閱讀</a> ...</p>\
                            </section>\
                        </article>\
                        </template>\
                        </div>',
    props: {
        artilces: Array
    }
});