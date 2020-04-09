import React from 'react';
import { Link } from 'gatsby';
// import cx from 'classnames';
import { Keyframes, animated } from 'react-spring/renderprops';
import { ContactsTable } from '@ui/atoms';
import { SocialList } from '@ui/molecules';

const delay = (time = 0) =>
  new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });

const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ y: 0, from: { y: -100 }, delay: 500 }, { y: -100, delay: 800 }],
  // single items,
  open: { delay: 0, y: 0 },
  // or async functions with side-effects
  close: async (call) => {
    await delay(400);
    await call({ delay: 0, y: -100 });
  },
});

const Content = Keyframes.Trail({
  peek: [
    { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: -100, opacity: 0, delay: 0 },
  ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 },
});

const items = [
  <Link to='/' className='title' activeClassName='active'>
    Main
  </Link>,
  <Link
    to='/portfolio/'
    className='title'
    // partiallyActive={true}
    activeClassName='active'
  >
    Portfolio
  </Link>,
  <Link
    to='/blog/'
    className='title'
    // partiallyActive={true}
    activeClassName='active'
  >
    Blog
  </Link>,
  <Link
    to='/about/'
    className='title'
    // partiallyActive={true}
    activeClassName='active'
  >
    About
  </Link>,
  <Link
    to='/contacts/'
    className='title'
    // partiallyActive={true}
    activeClassName='active'
  >
    Contacts
  </Link>,
];

const NavSideMenu = ({ active }) => {
  const state = active === undefined ? 'peek' : active ? 'open' : 'close';

  return (
    <Sidebar native state={state}>
      {({ y }) => {
        return (
          <animated.div
            className='overlay main-nav'
            style={{
              transform: y.interpolate((y) => `translate3d(0,${y}%,0)`),
            }}
          >
            <div className='overlay-content'>
              <div className='nav-container section fixed'>
                <div className='nav-header'></div>
                <div className='nav-body'>
                  <nav className='nav-menu'>
                    <ul className='list nav-list'>
                      <Content
                        native
                        items={items}
                        keys={items.map((_, i) => i)}
                        reverse={!active}
                        state={state}
                      >
                        {(item, i) => ({ x, ...props }) => (
                          <animated.li
                            style={{
                              transform: x.interpolate(
                                (x) => `translate3d(${x}%,0,0)`
                              ),
                              ...props,
                            }}
                          >
                            {item}
                          </animated.li>
                        )}
                      </Content>

                      {/* <li>
                        <Link
                          to='/portfolio/'
                          className='title'
                          partiallyActive={true}
                          activeClassName='active'
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/about/'
                          className='title'
                          partiallyActive={true}
                          activeClassName='active'
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/contacts/'
                          className='title'
                          partiallyActive={true}
                          activeClassName='active'
                        >
                          Contacts
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                  <div className='nav-contacts'>
                    <ContactsTable />
                  </div>
                </div>
                <div className='footer nav-footer'>
                  <span className='copyright text'>
                    Copyrights &copy; CrisperSoft 2019
                  </span>
                  <SocialList />
                </div>
              </div>
            </div>
          </animated.div>
        );
      }}
    </Sidebar>
  );
};

export default NavSideMenu;
