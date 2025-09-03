import Link from 'next/link';
import ContentContainer from '../components/layout/ContentContainer';

export default function NotFound() {
  return (
    <main>
      <ContentContainer>
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <h2 style={{ 
            color: '#dc2626', 
            margin: 0,
            fontSize: '48px',
            fontWeight: 'bold'
          }}>
            404
          </h2>
          
          <h3 style={{ 
            color: 'rgba(0, 0, 0, 0.8)', 
            margin: 0,
            fontSize: '24px'
          }}>
            Page Not Found
          </h3>
          
          <p style={{ 
            color: 'rgba(0, 0, 0, 0.7)',
            margin: 0,
            maxWidth: '400px',
            lineHeight: '1.5'
          }}>
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Link 
              href="/"
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 253, 232, 0.68)',
                border: 'none',
                borderRadius: '4px',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
                transition: 'background-color 0.2s',
                display: 'inline-block'
              }}
            >
              Go Home
            </Link>
            
            <Link 
              href="/develop"
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 253, 232, 0.68)',
                border: 'none',
                borderRadius: '4px',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
                transition: 'background-color 0.2s',
                display: 'inline-block'
              }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}
