import NotFound from '../components/404';
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
import Redux from '@/pages/Redux';
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

export default [
  { name: '画布', path: '/Canvas', component: Canvas },
  { name: '聊天生成器', path: '/ChatGPT', component: ChatGPT },
  { name: '圆形', path: '/Circle', component: Circle },
  { name: '内容编辑器', path: '/ContentEditable', component: ContentEditable },
  {
    name: '内容编辑器2',
    path: '/ContentEditable2',
    component: ContentEditable2,
  },
  {
    name: '内容编辑器3',
    path: '/ContentEditable3',
    component: ContentEditable3,
  },
  {
    name: '内容编辑器Npm',
    path: '/ContentEditableNpm',
    component: ContentEditableNpm,
  },
  { name: '创建元素', path: '/CreateElement', component: CreateElement },
  { name: '数据类型', path: '/DataPropType', component: DataPropType },
  { name: '去抖动', path: '/Debounce', component: Debounce },
  { name: '去抖动测试', path: '/DebounceTest', component: DebounceTest },
  { name: '生成器函数', path: '/GeneratorFn', component: GeneratorFn },
  { name: HueRotate.label, path: '/HueRotate', component: HueRotate },
  { name: '懒加载', path: '/Lazyload', component: Lazyload },
  { name: '导入markdown', path: '/MarkdownImport', component: MarkdownImport },
  { name: '流星', path: '/Meteor', component: Meteor },
  { name: '交叉观察', path: '/ObIntersection', component: ObIntersection },
  { name: '1px', path: '/Onepx', component: Onepx },
  { name: '模式', path: '/Pattern', component: Pattern },
  { name: '管道线', path: '/PipeLine', component: PipeLine },
  { name: '位置', path: '/Position', component: Position },
  { name: '进度', path: '/Progress', component: Progress },
  {
    name: '彩色进度',
    path: '/ProgressWithColor',
    component: ProgressWithColor,
  },
  { name: '承诺', path: '/Promise', component: Promise },
  { name: '随机画布', path: '/RandomCanvas', component: RandomCanvas },
  {
    name: '漂亮的拖拽',
    path: '/ReactBeautifulDnd',
    component: ReactBeautifulDnd,
  },
  { name: '累计计数', path: '/ReactCountup', component: ReactCountup },
  {
    name: '使用命令句柄',
    path: '/ReactUseImperativeHandle',
    component: ReactUseImperativeHandle,
  },
  {
    name: '使用过渡',
    path: '/ReactUseTransition',
    component: ReactUseTransition,
  },
  { name: '简单实现', path: '/Redux', component: Redux },
  { name: '渲染为字符串', path: '/RenderToString', component: RenderToString },
  { name: '调整大小', path: '/Resize', component: Resize },
  { name: '动画', path: '/SAnimate', component: SAnimate },
  { name: '屏幕捕获', path: '/ScreenCapture', component: ScreenCapture },
  { name: '算法', path: '/Suanfa', component: Suanfa },
  { name: '算法2', path: '/Suanfa2', component: Suanfa2 },
  { name: '算法3', path: '/Suanfa3', component: Suanfa3 },
  { name: 'SVG路径圆', path: '/SvgPathCircle', component: SvgPathCircle },
  { name: '测试', path: '/Test', component: Test },
  { name: '字符串', path: '/ToString', component: ToString },
  { name: '过渡卡片', path: '/TransitionCard', component: TransitionCard },
  { name: 'WEB工作者', path: '/Worker', component: Worker },
  { name: 'HTML', path: '/html', component: html },
  { name: '摄像头', path: '/zCamera', component: zCamera },
  { name: '找不到页面', path: '/page404', component: NotFound },
];
