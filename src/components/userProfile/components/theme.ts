export interface ThemeElementType {
  name: string;
  firstColor: string;
  secondColor: string;
  bgColor: string;
  fontColor: string;
  shadow: string;
}

export type ThemeType = ThemeElementType[];

export const theme: ThemeType = [
  {
    name: 'Classic',
    firstColor: 'rgb(218, 41, 42)',
    secondColor: 'black',
    bgColor: 'rgb(22, 22, 22)',
    fontColor: 'white',
    shadow: '0px 80px 29px -5px rgba(0, 0, 0, 1) inset',
  },
  {
    name: 'Light',
    firstColor: 'rgb(218, 41, 42)',
    secondColor: 'bla',
    bgColor: 'white',
    fontColor: 'black',
    shadow: '0px 80px 29px -5px white inset',
  },
  {
    name: 'Third',
    firstColor: 'rgb(22, 22, 22)',
    secondColor: 'bla',
    bgColor: 'black',
    fontColor: 'white',
    shadow: '0px 80px 29px -5px white inset',
  },
  {
    name: 'Four',
    firstColor: 'rgb(22, 22, 22)',
    secondColor: 'bla',
    bgColor: 'black',
    fontColor: 'white',
    shadow: '0px 80px 29px -5px white inset',
  },
];
