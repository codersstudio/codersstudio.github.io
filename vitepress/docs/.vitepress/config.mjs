import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coders",
  description: "A Coders Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '가이드', link: '/coders-intro' }
    ],

    sidebar: [
      {
        text: '소개',
        items: [
          { text: 'Coders란 무엇인가?', link: '/coders-intro' },
          { text: '시작하기', link: '/coders-startup' }
        ]
      },
      {
        text: 'Jssp 문법',
        items: [
          { text: '데이터 타입', link: '/syntax/jssp-syntax-datatype' },
          { text: '기본 문법', link: '/syntax/jssp-syntax-basic' },
          { text: '@ 문법', link: '/syntax/jssp-syntax-at' },
          { text: 'Opcode', link: '/syntax/jssp-syntax-opcode' },
          { text: 'Import', link: '/syntax/jssp-syntax-import' },
          { text: 'Class 작성', link: '/syntax/jssp-syntax-class' },
          { text: '외부 라이브러리', link: '/syntax/jssp-syntax-extern' },
          { text: '테이블 설계', link: '/syntax/jssp-syntax-table' },
          { text: '쿼리 작성', link: '/syntax/jssp-syntax-query' },
          { text: 'Flutter', link: '/syntax/jssp-syntax-widget' },
          { text: 'Vue, React', link: '/syntax/jssp-syntax-html' },
          { text: '프로시저', link: '/syntax/jssp-syntax-dbproc' },
        ]
      },
      {
        text: 'Jssp 인터페이스',
        items: [
          // auth
          { text: '@auth', link: '/interface/jssp-interface-auth' },
          // header
          { text: '@header', link: '/interface/jssp-interface-header' },
          // widget
          { text: '@widget', link: '/interface/jssp-interface-widget' },
        ]
      },
      {
        text: 'Built in 클래스',
        items: [
          // string
          { text: 'string', link: '/builtin/jssp-builtin-string' },
          // int32
          { text: 'int32', link: '/builtin/jssp-builtin-int32' },
          // int64
          { text: 'int64', link: '/builtin/jssp-builtin-int64' },
          // float
          { text: 'float', link: '/builtin/jssp-builtin-float' },
          // double
          { text: 'double', link: '/builtin/jssp-builtin-double' },
          // list<T>
          { text: 'list&lt;T&gt;', link: '/builtin/jssp-builtin-list' },
          // map<K, V>
          { text: 'map&lt;K, V&gt;', link: '/builtin/jssp-builtin-map' },
          // set<T>
          { text: 'set&lt;T&gt;', link: '/builtin/jssp-builtin-set' },
          // dynamic
          { text: 'dynamic', link: '/builtin/jssp-builtin-dynamic' },
          // file
          { text: 'file', link: '/builtin/jssp-builtin-file' },
          // formfile
          { text: 'formfile', link: '/builtin/jssp-builtin-formfile' },
          // datetime
          { text: 'datetime', link: '/builtin/jssp-builtin-datetime' },
          // console
          { text: 'console', link: '/builtin/jssp-builtin-console' },
          // assert
          { text: 'assert', link: '/builtin/jssp-builtin-assert' },
          // system
          { text: 'system', link: '/builtin/jssp-builtin-system' },
        ]
      },
      {
        text: '튜토리얼',
        items: [
          { text: 'Todo 예제', link: '/todo-example' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  outDir: '../../../../../github/codersstudio.github.io'
})
