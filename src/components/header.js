import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import '../layouts/index.css'

class Header extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
      this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }


  render() {
    return (<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className={this.state.hasScrolled ? '___gatsby aScrolled' : '___gatsby'}>


          <div className='HeaderGroup'>


            <Link to='/'> work </Link>

            <Link to='/about/'> me </Link>
          </div>
        </div>
      </div>

    )
  }
}

export default Header