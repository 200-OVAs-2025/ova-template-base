const Page404 = ({ page }: { page: string }) => {
  return (
    <section>
      <div className="message-404 u-flow u-text-center" style={{ '--flow-space': '1rem' } as React.CSSProperties}>
        <h1>404</h1>
        <h2>Not found</h2>
        <p>
          Sorry the page <strong>"{page}"</strong> doesn't exist.
        </p>
      </div>
    </section>
  );
};

export default Page404;
