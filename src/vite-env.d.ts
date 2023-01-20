/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 定義した変数は下記に追加する
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
