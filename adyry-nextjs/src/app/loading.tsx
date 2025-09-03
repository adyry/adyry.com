import ContentContainer from '../components/layout/ContentContainer';

export default function Loading() {
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
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(0, 0, 0, 0.1)',
            borderTop: '3px solid rgba(0, 0, 0, 0.6)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ 
            color: 'rgba(0, 0, 0, 0.7)',
            fontSize: '16px',
            margin: 0
          }}>
            Loading...
          </p>
        </div>
      </ContentContainer>
    </main>
  );
}
