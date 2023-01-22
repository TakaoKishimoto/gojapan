// stylelintをリントする際に無効化しているためうまく働いている。
// 毎回index.cssでエラーが起きるので、後でなぜうまくいかないのか確認する
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
