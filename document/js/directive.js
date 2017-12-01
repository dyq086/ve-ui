import Vue from 'vue'
import hljs from './highlight'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  console.log(blocks)
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
