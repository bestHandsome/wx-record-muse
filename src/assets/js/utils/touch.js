import Vue from 'vue';
import TouchCls from './touch-cls';
/*
 * 点击事件
 */
Vue.directive('tap', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'tap');
    touch.initialize();
  }
});
/*
 * 长按事件
 */
Vue.directive('swipe', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipe');
    touch.initialize();
  }
});
/*
 * 左滑
 */
Vue.directive('swipeLeft', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipeLeft');
    touch.initialize();
  }
});
/*
 * 右滑
 */
Vue.directive('swipeRight', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipeRight');
    touch.initialize();
  }
});
/*
 * 下滑
 */
Vue.directive('swipeDown', {
  bind: function(el, binding) {
    const touch = new TouchCls(el, binding, 'swipeDown');
    touch.initialize();
  }
});
/*
 * 上滑
 */
Vue.directive('swipeUp', {
  bind: function (el, binding) {
    const touch = new TouchCls(el, binding, 'swipeUp');
    touch.initialize();
  }
});
/*
 * 长按事件
 */
Vue.directive('longTap', {
  bind: function(el, binding) {
    const touch = new TouchCls(el, binding, 'longTap');
    touch.initialize();
  }
});