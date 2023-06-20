export default function ErrorPage() {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <div className="flex justify-center mt-8">
        <img src="img/others/error-1.png" alt="#" className="w-[50%]" />
      </div>
      <h1>404</h1>
      <h2>Page Not Found!</h2>
      <p className="text-light">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <div className="btn-wrapper">
        <a href="/" className="btn">
          <i className="fas fa-long-arrow-alt-left"></i> BACK TO HOME
        </a>
      </div>
    </div>
  );
}
