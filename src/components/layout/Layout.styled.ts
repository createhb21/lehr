import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface MainProps {
  header: boolean;
  footer: boolean;
}

export const Main = styled.main<MainProps>`
  ${({ theme, header, footer }) => css`
    position: relative;
    width: 100vw;
    min-width: max-content;
    margin-top: 100px;
    min-height: ${footer && header
      ? `calc(100vh - ${theme.size.header.height_m} - ${theme.size.footer.height_m})`
      : header
      ? `calc(100vh - ${theme.size.header.height_m}`
      : footer
      ? `calc(100vh - ${theme.size.footer.height_m})`
      : '100vh'};
    padding-top: ${header ? theme.size.header.height_m : '0'};
    background-color: ${theme.colors.white};

    @media ${theme.breakPoint.device.tablet} {
      min-height: ${footer && header
        ? `calc(100vh - ${theme.size.header.height_m} - ${theme.size.footer.height_t})`
        : header
        ? `calc(100vh - ${theme.size.header.height_m}`
        : footer
        ? `calc(100vh - ${theme.size.footer.height_t})`
        : '100vh'};
    }

    @media ${theme.breakPoint.device.desktop} {
      min-height: ${footer && header
        ? `calc(100vh - ${theme.size.header.height_d} - ${theme.size.footer.height_d})`
        : header
        ? `calc(100vh - ${theme.size.header.height_d}`
        : footer
        ? `calc(100vh - ${theme.size.footer.height_d})`
        : '100vh'};
      padding-top: ${header ? theme.size.header.height_d : '0'};
    }
  `}
`;
