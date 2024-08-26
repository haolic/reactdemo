const Page404 = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'auto',
        textAlign: 'center',
        fontSize: 100,
        fontFamily: 'monospace',
        fontWeight: 'bolder',
        backgroundColor: '#f0f0f0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>404</h1>
      <p style={{ margin: 0 }}>无此页面</p>
    </div>
  );
};

export default Page404;
