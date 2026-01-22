function Home() {
  return (
    <>
      <section className="bg-light p-5 rounded text-center mb-5">
        <h1 className="fw-bold">Welcome to MyStore</h1>
        <p className="lead">
          Discover high quality products at unbeatable prices
        </p>
        <button className="btn btn-primary btn-lg">
          Shop Now
        </button>
      </section>

      <section className="row text-center g-4">
        <div className="col-md-4">
          <div className="card p-4">
            <h4>Fast Delivery</h4>
            <p>Quick and reliable shipping worldwide.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
            <h4>Secure Payment</h4>
            <p>All payments are encrypted and secure.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4">
            <h4>Best Quality</h4>
            <p>We sell only trusted products.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
