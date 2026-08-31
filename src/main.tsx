import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, Global, css } from '@emotion/react';

import App from './App';
import { theme } from './theme/theme';

// Local fonts (Playfair Display for headings, Inter for UI)
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global
        styles={(t) =>
          css`
            html, body, #root {
              height: 100%;
              margin: 0;
            }

            body {
              font-family: ${t.typography.fontFamilies?.body || t.typography.fontFamily};
              background: var(--app-bg, #fff);
              color: var(--app-text, #111);
            }
          `
        }
      />
      <App />
    </ThemeProvider>
  </StrictMode>,
);