import React from 'react'
import '../Top/style.scss'


const Index = ()=> {

  return (
    <section class='showcase'>
      <div class='image-container'>
        <a src='../../assets/images/top.jpg'></a>
      </div>
      <div class='content'>
        <h1>音楽を一人で終わらせない</h1>
        <h1>あなたにあった音楽の形を。</h1>
        <h3>SoundsFetchはそれぞれの個性に特化したミュージシャン検索サービスです。</h3>
        <h3>あなたにあった音楽の形を探してみませんか？</h3>
        <a href='/users' class='btn'>SoundsFetchをはじめる</a>
      </div>
    </section>
  )
}

export default Index
