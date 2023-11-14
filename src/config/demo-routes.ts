import Lazyload from '@/pages/Lazyload';
import Canvas from '@/pages/Canvas';
import HueRotate from '@/pages/HueRotate';
import ChatGPT from '@/pages/ChatGPT';
import Circle from '@/pages/Circle';
import ContentEditable from '@/pages/ContentEditable';
import ContentEditable2 from '@/pages/ContentEditable2';
import ContentEditable3 from '@/pages/ContentEditable3';
import ContentEditableNpm from '@/pages/ContentEditableNpm';
import CreateElement from '@/pages/CreateElement';
import DataPropType from '@/pages/DataPropType';
import Debounce from '@/pages/Debounce';
import DebounceTest from '@/pages/DebounceTest';
import GeneratorFn from '@/pages/GeneratorFn';
import MarkdownImport from '@/pages/MarkdownImport';
import Meteor from '@/pages/Meteor';
import ObIntersection from '@/pages/ObIntersection';
import Onepx from '@/pages/Onepx';
import Pattern from '@/pages/Pattern';
import PipeLine from '@/pages/PipeLine';
import Position from '@/pages/Position';
import Progress from '@/pages/Progress';
import ProgressWithColor from '@/pages/ProgressWithColor';
import Promise from '@/pages/Promise';
import RandomCanvas from '@/pages/RandomCanvas';
import ReactBeautifulDnd from '@/pages/ReactBeautifulDnd';
import ReactCountup from '@/pages/ReactCountup';
import ReactUseImperativeHandle from '@/pages/ReactUseImperativeHandle';
import ReactUseTransition from '@/pages/ReactUseTransition';
import RenderToString from '@/pages/RenderToString';
import Resize from '@/pages/Resize';
import SAnimate from '@/pages/SAnimate';
import ScreenCapture from '@/pages/ScreenCapture';
import Suanfa from '@/pages/Suanfa';
import Suanfa2 from '@/pages/Suanfa2';
import Suanfa3 from '@/pages/Suanfa3';
import SvgPathCircle from '@/pages/SvgPathCircle';
import Test from '@/pages/Test';
import ToString from '@/pages/ToString';
import TransitionCard from '@/pages/TransitionCard';
import Worker from '@/pages/Worker';
import html from '@/pages/html';
import zCamera from '@/pages/zCamera';
import Layout from '@/layout';

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
    { name: HueRotate.label, path: 'HueRotate', Component: HueRotate },
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
  ],
};
