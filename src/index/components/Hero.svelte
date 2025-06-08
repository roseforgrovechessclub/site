<script>
  import LogoWhite from "../assets/logo_white.png";
</script>

<section class="hero">
  <div class="hero-content">
    <img src={LogoWhite} alt="Rose Forgrove Chess Club Logo" />
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
    padding: 1rem;
    gap: 0.5rem;
    color: white;
    background: $primary-gradient;
    text-align: center;

    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    .hero-content {
      max-width: 750px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
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
