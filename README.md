# README

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [README](#readme)
  - [Dockerによる環境構築](#dockerによる環境構築)
  - [Dockerを用いないアプリの起動](#dockerを用いないアプリの起動)
  - [デプロイ関連](#デプロイ関連)
    - [cloud runへのデプロイ](#cloud-runへのデプロイ)
  - [開発ルール](#開発ルール)
  - [開発のTIPS](#開発のtips)
    - [ページの追加方法](#ページの追加方法)
    - [Material UIの使い方](#material-uiの使い方)
    - [各環境の設定ファイル](#各環境の設定ファイル)

<!-- /code_chunk_output -->
## Dockerによる環境構築
事前にDocker for macをダウンロードする
以下のコマンドを実行し、containerを作成する
```bash
$ docker-compose build
```

ライブライリーをinstallする

```bash
$ docker-compose run app npm install
```

コンテナを起動し、サーバーを実行する
```bash
$ docker-compose up
# -dでデーモンで起動できる
```

http://localhost:3220/にアクセスできることを確認する

コンテナを停止し、サーバーを停止する
```bash
$ docker-compose down
```

## Dockerを用いないアプリの起動
```bash
# localのapiを使用する場合(開発中は基本的にこれで起動する)
$ npm run start:dev
# localのapiを使用し、Reactを動作させるサーバーをexpressにしたい場合
$ npm run build
$ npm run build-dev
$ npm start
# 本番環境のapiを使用し、Reactを動作させるサーバーをexpressにしたい場合
$ npm run build
$ npm run build-prod
$ npm start
```

## デプロイ関連
### cloud runへのデプロイ
masterをpushすると自動でデプロイされる

## 開発ルール
- 作成したものは基本的に`develop`へマージすること
- ファイルの配置場所
  - ページそのもの => `containers/*`
  - ページの部品 => `components/*`
- ファイル/変数の命名
  - スネークケースを使う
    - ex) singIn

## 開発のTIPS
### ページの追加方法
- containers配下にファイルを追加
- App.jsでファイルをimportする
- routeを追加する
```jacascript
// signInを追加する場合
// pathは`/sigin_in`

import SignIn from './containers/users/SignIn'
<BrowserRouter>
  // .. 
  <Route exact path="/sign_in" component={SignIn} />  //追加する
</BrowserRouter>
```

### Material UIの使い方
- https://material-ui.com/
- color theme
  - 公式(English)
  - https://material-ui.com/api/app-bar/
  - 詳しめ(日本語)
  - https://tech-blog.cloud-config.jp/2020-03-18-summary-of-how-to-change-component-colors-in-material-ui/

### 各環境の設定ファイル
- .env => local
- .env.production  => production
- 参考 https://dev.classmethod.jp/articles/react-dotenv-cli/