import { css } from 'linaria';

export const globalStyles = css`
  :global() {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      font-size: 16px;
    }

    a {
      color: inherit;
    }

    svg {
      width: 100%;
      height: 100%;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }
`;
