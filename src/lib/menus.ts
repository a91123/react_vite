export interface Menu {
  label: string
  path?: string
  subs?: Menu[]
}
export const menus: Menu[] = [
  {
    label: '衣服',
    path: 'xxx',
    subs: [
      { label: '衝鋒衣', path: 'xx' },
      { label: '牛仔外套', path: 'xx' },
    ],
  },
  {
    label: '褲子',
    path: 'xxx',
    subs: [
      { label: '牛仔褲', path: 'xx' },
      { label: '休閒褲', path: 'xx' },
    ],
  },
  {
    label: '鞋子',
    path: 'xxx',
    subs: [
      { label: '帆布鞋', path: 'xx' },
      { label: '運動鞋', path: 'xx' },
    ],
  },
  {
    label: '狗勾',
    path: 'xxx',
    subs: [
      { label: '科基', path: 'xx' },
      { label: '法鬥', path: 'xx' },
    ],
  },
  {
    label: '喵貓',
    path: 'xxx',
    subs: [
      { label: '暹羅貓', path: 'xx' },
      { label: '波斯貓', path: 'xx' },
    ],
  },
  {
    label: '聯絡我們',
    path: 'xxxx',
  },
]
