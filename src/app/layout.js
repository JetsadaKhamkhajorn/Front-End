import './globals.css'; // CSS สำหรับ Global Styles
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'JAY CAPITAL',
  description: 'A sample Next.js project',
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel='icon' type="image/png" sizes="16x16" href="/Logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
