const Index = () => {
  return (
    <div className='sketchfab-embed-wrapper'>
      <iframe
        title='Kobe V Protro 5x Champ'
        allowFullScreen={true}
        allow='autoplay; fullscreen; xr-spatial-tracking'
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src='https://sketchfab.com/models/7544d6c13dcd4c3194c3c29833b538d2/embed'
      ></iframe>
      <p
        style={{
          fontSize: '13px',
          fontWeight: 'normal',
          margin: '5px',
          color: '#4A4A4A',
        }}
      >
        <a
          href='https://sketchfab.com/3d-models/kobe-v-protro-5x-champ-7544d6c13dcd4c3194c3c29833b538d2?utm_medium=embed&utm_campaign=share-popup&utm_content=7544d6c13dcd4c3194c3c29833b538d2'
          target='_blank'
          rel='noreferrer'
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Kobe V Protro 5x Champ
        </a>{' '}
        by{' '}
        <a
          href='https://sketchfab.com/ditovirnantio?utm_medium=embed&utm_campaign=share-popup&utm_content=7544d6c13dcd4c3194c3c29833b538d2'
          target='_blank'
          rel='noreferrer'
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          ditovirnantio
        </a>{' '}
        on{' '}
        <a
          href='https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7544d6c13dcd4c3194c3c29833b538d2'
          target='_blank'
          rel='noreferrer'
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default Index;
