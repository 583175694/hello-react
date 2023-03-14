import { useState } from "react";

// 屏幕信息 hook
export default function useScreen() {
  let openWindow: any = null;
  let screen: any = window.screen;

  // 开启新页面
  const openNewWindow = async (
    url: string | URL | undefined,
    name: string | undefined
  ) => {
    if (!("getScreenDetails" in window.self)) {
      console.warn("你的chrome版本不支持多屏展示功能！", 3);
      openWindow = window.open(url, name);
      return;
    }
    let fulls = "screenX=0,top=0,screenY=0,scrollbars=1"; // 定义弹出窗口的参数
    // 如果
    // 1. screen.availLeft 值是负数，主屏在右侧，当前屏幕是左侧副屏
    // 2. screen.availLeft 值是正数，主屏在左侧，当前屏幕是右侧副屏
    // 2. screen.availLeft 值是0，是主屏，左右屏幕下面方法判断
    if (Math.abs(screen.availLeft) >= screen.availWidth) {
      // 说明屏幕是副屏，直接设置0，到主屏
      fulls += `,left=0`;
    } else if (screen.availLeft == 0) {
      // 主屏幕
      // 左侧主屏幕，右侧副屏幕直接left到右侧
      fulls += `,left=${screen.availWidth}`;
    }
    // 获取屏幕 宽高复制
    if (window.screen) {
      // eslint-disable-next-line no-restricted-globals
      let ah = screen.availHeight - 30;
      // eslint-disable-next-line no-restricted-globals
      let aw = screen.availWidth - 10;
      fulls += `,height=${ah}`;
      fulls += `,innerHeight=${ah}`;
      fulls += `,width=${aw}`;
      fulls += `,innerWidth=${aw}`;
      fulls += ",resizable";
    } else {
      fulls += ",resizable"; // 对于不支持screen属性的浏览器，可以手工进行最大化。 manually
    }
    openWindow = window.open(url, name, fulls);
    if (openWindow.screen.availLeft == 0) {
      // 右侧主屏幕，左侧侧副屏幕直接moveTo到左侧
      if (Math.abs(screen.availLeft) < screen.availWidth) {
        openWindow.moveTo(-`${screen.availWidth}`, 0);
      }
    }

    console.log('openWindow: ', openWindow);
  };

  // 谷歌跳转
  const openChomOA = async () => {
    let url = `123456789`;
    openNewWindow(url, "");
  };

  return {
    openNewWindow,
    openChomOA,
  };
}
