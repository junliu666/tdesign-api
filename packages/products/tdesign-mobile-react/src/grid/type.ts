/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge';
import { TNode } from '../common';

export interface TdGridItemProps {
  /**
   * 透传至 Badge 属性
   * @default null
   */
  badge?: BadgeProps;
  /**
   * 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点
   */
  description?: TNode;
  /**
   * 图片，可以是图片地址，也可以自定义图片节点，如果传入对象则透传至 image 组件
   */
  image?: TNode;
  /**
   * 内容布局方式
   * @default vertical
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * 文本，可以通过 Props 传入文本，也可以自定义标题节点
   */
  text?: TNode;
}