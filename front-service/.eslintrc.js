module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0, //prettier 에 대한 경고 끄기
    'for-direction': 2, // for 루프가 무한대로 실행되는 것을 방지
    'no-undef': 2,
    'no-console': process.env.NOVE_DEV === 'production' ? 2 : 0,
    'no-debugger': process.env.NOVE_DEV === 'production' ? 2 : 0,
    'eol-last': 0,
    'no-empty': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-unreachable': 2,
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 2,
    'react/no-deprecated': 2, // react version 감지하여 deprecated 된 함수 경고
    'react/no-direct-mutation-state': 2, // state 를 직접 바꾸지 않게하기 위한 옵션
    'react/no-is-mounted': 2,
    'react/no-render-return-value': 2,
    'react/no-unknown-property': 2,
    'react/require-render-return': 2, //render method를 작성할때 return 이 없으면 경고
    quotes: ['off', 'single'],
  },
};
