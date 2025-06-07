<section class="hero">
  <div class="hero-content">
    <h1>Rose Forgrove Chess Club</h1>
    <p>Come join the largest chess club in leeds!</p>
    <div class="links">
      <a href="#contact" class="hero-button">Contact Us</a>
    </div>
  </div>
</section>

<style lang="scss">
  $primary-gradient: linear-gradient(to right, #6a11cb, #db4437);

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    background: $primary-gradient;
    color: white;
    text-align: center;

    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    .hero-content {
      max-width: 750px;

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      .links {
        display: flex;
        justify-content: center;
        gap: 1rem;

        a {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: white;
          text-decoration: none;
          color: #333;
          cursor: pointer;

          font-weight: bold;
          border-radius: 8px;
          transition: background 0.3s ease;

          &:hover {
            background: #e2e8f0;
          }
        }
      }
    }
  }
</style>
