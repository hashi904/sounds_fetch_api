import React from 'react'
import { Link } from 'react-router-dom'

import './../../assets/scss/basic/footer.scss'

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer__main'>
        <div className='footer__main_list'>
          <li className='nav-word'>
            <Link to='' className='nav-word__link'>
              利用規約
            </Link>
          </li>
          <li className='nav-word'>
            <Link to='' className='nav-word__link'>
            プライバシーポリシー
            </Link>
          </li>
          <li className='nav-word'>
            <Link to='' className='nav-word__link'>
              お問い合わせ
            </Link>
          </li>
        </div>
        <div className='footer__main_copy-right'>
          © SoundsFetch
        </div>
      </div>
    </div>
  )
}

export default Footer
