import Lazyload from '@/pages/DemoPages/Lazyload';
import Canvas from '@/pages/DemoPages/Canvas';
import HueRotate from '@/pages/DemoPages/HueRotate';
import ChatGPT from '@/pages/DemoPages/ChatGPT';
import Circle from '@/pages/DemoPages/Circle';
import ContentEditable from '@/pages/DemoPages/ContentEditable';
import ContentEditable2 from '@/pages/DemoPages/ContentEditable2';
import ContentEditable3 from '@/pages/DemoPages/ContentEditable3';
import ContentEditableNpm from '@/pages/DemoPages/ContentEditableNpm';
import CreateElement from '@/pages/DemoPages/CreateElement';
import DataPropType from '@/pages/DemoPages/DataPropType';
import Debounce from '@/pages/DemoPages/Debounce';
import DebounceTest from '@/pages/DemoPages/DebounceTest';
import GeneratorFn from '@/pages/DemoPages/GeneratorFn';
import MarkdownImport from '@/pages/DemoPages/MarkdownImport';
import Meteor from '@/pages/DemoPages/Meteor';
import ObIntersection from '@/pages/DemoPages/ObIntersection';
import Onepx from '@/pages/DemoPages/Onepx';
import Pattern from '@/pages/DemoPages/Pattern';
import PipeLine from '@/pages/DemoPages/PipeLine';
import Position from '@/pages/DemoPages/Position';
import Progress from '@/pages/DemoPages/Progress';
import ProgressWithColor from '@/pages/DemoPages/ProgressWithColor';
import Promise from '@/pages/DemoPages/Promise';
import RandomCanvas from '@/pages/DemoPages/RandomCanvas';
import ReactBeautifulDnd from '@/pages/DemoPages/ReactBeautifulDnd';
import ReactCountup from '@/pages/DemoPages/ReactCountup';
import ReactUseImperativeHandle from '@/pages/DemoPages/ReactUseImperativeHandle';
import ReactUseTransition from '@/pages/DemoPages/ReactUseTransition';
import RenderToString from '@/pages/DemoPages/RenderToString';
import Resize from '@/pages/DemoPages/Resize';
import SAnimate from '@/pages/DemoPages/SAnimate';
import ScreenCapture from '@/pages/DemoPages/ScreenCapture';
import Suanfa from '@/pages/DemoPages/Suanfa';
import Suanfa2 from '@/pages/DemoPages/Suanfa2';
import Suanfa3 from '@/pages/DemoPages/Suanfa3';
import SvgPathCircle from '@/pages/DemoPages/SvgPathCircle';
import Test from '@/pages/DemoPages/Test';
import ToString from '@/pages/DemoPages/ToString';
import TransitionCard from '@/pages/DemoPages/TransitionCard';
import Worker from '@/pages/DemoPages/Worker';
import html from '@/pages/DemoPages/html';
import zCamera from '@/pages/DemoPages/zCamera';
import Layout from '@/layout';
import PositionLock from '@/pages/DemoPages/PositionLock';

export default {
  path: '/demo',
  name: 'DEMO',
  Component: Layout,
  children: [
    { name: '画布', path: 'Canvas', Component: Canvas, index: true },
    { name: '聊天生成器', path: 'ChatGPT', Component: ChatGPT },
    { name: '圆形', path: 'Circle', Component: Circle },
    {
      name: '内容编辑器',
      path: 'ContentEditable',
      Component: ContentEditable,
    },
    {
      name: '内容编辑器2',
      path: 'ContentEditable2',
      Component: ContentEditable2,
    },
    {
      name: '内容编辑器3',
      path: 'ContentEditable3',
      Component: ContentEditable3,
    },
    {
      name: '内容编辑器Npm',
      path: 'ContentEditableNpm',
      Component: ContentEditableNpm,
    },
    { name: '创建元素', path: 'CreateElement', Component: CreateElement },
    { name: '数据类型', path: 'DataPropType', Component: DataPropType },
    { name: '去抖动', path: 'Debounce', Component: Debounce },
    { name: '去抖动测试', path: 'DebounceTest', Component: DebounceTest },
    { name: '生成器函数', path: 'GeneratorFn', Component: GeneratorFn },
    { name: '色调旋转', path: 'HueRotate', Component: HueRotate },
    { name: '懒加载', path: 'Lazyload', Component: Lazyload },
    {
      name: '导入markdown',
      path: 'MarkdownImport',
      Component: MarkdownImport,
    },
    { name: '流星', path: 'Meteor', Component: Meteor },
    { name: '交叉观察', path: 'ObIntersection', Component: ObIntersection },
    { name: '1px', path: 'Onepx', Component: Onepx },
    { name: '模式', path: 'Pattern', Component: Pattern },
    { name: '管道线', path: 'PipeLine', Component: PipeLine },
    { name: '位置', path: 'Position', Component: Position },
    { name: '进度', path: 'Progress', Component: Progress },
    {
      name: '彩色进度',
      path: 'ProgressWithColor',
      Component: ProgressWithColor,
    },
    { name: '承诺', path: 'Promise', Component: Promise },
    { name: '随机画布', path: 'RandomCanvas', Component: RandomCanvas },
    {
      name: '漂亮的拖拽',
      path: 'ReactBeautifulDnd',
      Component: ReactBeautifulDnd,
    },
    { name: '累计计数', path: 'ReactCountup', Component: ReactCountup },
    {
      name: '使用命令句柄',
      path: 'ReactUseImperativeHandle',
      Component: ReactUseImperativeHandle,
    },
    {
      name: '使用过渡',
      path: 'ReactUseTransition',
      Component: ReactUseTransition,
    },
    {
      name: '渲染为字符串',
      path: 'RenderToString',
      Component: RenderToString,
    },
    { name: '调整大小', path: 'Resize', Component: Resize },
    { name: '动画', path: 'SAnimate', Component: SAnimate },
    { name: '屏幕捕获', path: 'ScreenCapture', Component: ScreenCapture },
    { name: '算法', path: 'Suanfa', Component: Suanfa },
    { name: '算法2', path: 'Suanfa2', Component: Suanfa2 },
    { name: '算法3', path: 'Suanfa3', Component: Suanfa3 },
    { name: 'SVG路径圆', path: 'SvgPathCircle', Component: SvgPathCircle },
    { name: '测试', path: 'Test', Component: Test },
    { name: '字符串', path: 'ToString', Component: ToString },
    { name: '过渡卡片', path: 'TransitionCard', Component: TransitionCard },
    { name: 'WEB工作者', path: 'Worker', Component: Worker },
    { name: 'HTML', path: 'html', Component: html },
    { name: '摄像头', path: 'zCamera', Component: zCamera },
    { name: '位置锁定', path: 'position-lock', Component: PositionLock },
  ],
};
