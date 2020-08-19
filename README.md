# README

- URL:https://share-space0220.herokuapp.com/posts

## 確認用ログインアカウント
- NAME:  test name<br>
- EMAIL: share-space@gmail.com<br>
- PASS:  sharespace

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :posts
- has_many :comments

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|user_name|string|
### Association
- belongs_to :user
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|foreign_key: true|
|post_id|integer|foreign_key: true|
### Association
- belongs_to :post
- belongs_to :user

# トップページ& 検索機能
![トップページ](https://github.com/kazunari0220/share-space/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-08-20%201.00.44.png)
・whereメソッドとLIKE句を使用して検索できます。<br>
・JavaScriptで動きを付けています。<br>
・自分の投稿と他のユーザーの投稿が見れます。

# 詳細&コメント
![詳細&コメント](https://github.com/kazunari0220/share-space/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-08-20%201.01.08.png)
・コメントは非同期通信になっています。

# アカウント作成
![アカウント作成](https://github.com/kazunari0220/share-space/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-08-20%201.01.33.png)
・deviceを用いています。

# マイページ
![マイページ](https://github.com/kazunari0220/share-space/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-08-20%201.02.30.png)
・自分の投稿が表示されます。
・削除・編集が可能です。
