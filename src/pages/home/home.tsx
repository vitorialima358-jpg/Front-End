import homeImage from '../../assets/home.png';

function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '8%',
      }}
    >
      <div
        style={{
          color: 'white',
          textAlign: 'left',
          maxWidth: '600px',
          padding: '2rem',
          background: 'rgba(49, 46, 129, 0.7)',
          borderRadius: '12px',
        }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Seja Bem Vinde!
        </h2>

        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          Expresse aqui seus pensamentos e opiniões
        </p>

        <button
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid white',
            background: 'transparent',
            color: 'white',
            fontSize: '1rem',
          }}
        >
          Nova Postagem
        </button>
      </div>
    </div>
  );
}

export default Home;
