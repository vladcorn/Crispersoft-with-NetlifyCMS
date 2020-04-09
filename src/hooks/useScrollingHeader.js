import React from 'react';

export default function() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      const header = ref.current;

      if (header) {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos <= 0 || prevScrollpos > currentScrollPos) {
          header.style.top = '0';
        } else {
          header.style.top = '-50px';
        }

        prevScrollpos = currentScrollPos;
      }
    };
  }, []);

  return ref;
}
