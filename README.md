## 実行等に必要なもの
- node
- pnpm
### インストール
```bash
pnpm add -D typescript @types/node
```
### コンパイルしたファイルを置くディレクトリを作成
```bash
mkdir dist
```
### コンパイル
```bash
pnpm tsc
```
### 実行
```bash
node .\dist\task.js
```
