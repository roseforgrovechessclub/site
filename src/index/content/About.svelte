<script lang="ts">
 import Hero from "../components/Hero.svelte";
 import Card from "../components/Card.svelte";
 import H2 from "../components/H2.svelte";
 import H3 from "../components/H3.svelte";
 import A from "../components/A.svelte";
 import Parochial from "../assets/parochial.jpg";
</script>

<article>
  <Hero />
  <Card>
    <H2>About Us</H2>
    <p><strong>Leeds' largest chess club</strong>, established in the 1970s.</p>
    <p>
      We compete during the season in leagues run by the Leeds Chess Association
      (Wednesdays) and Yorkshire Chess Association (Saturdays).
    </p>
    <p>
      In the off-season, we run club championships and internal competitions.
    </p>

    <H3>Fees</H3>
    <p>Membership fee (due 1st September)</p>
    <ul>
      <li>Standard: £10.00</li>
      <li>Juniors (under 18): £5.00</li>
    </ul>
    <p>Home and Saturday away games have a board fee of:</p>
    <ul>
      <li>Standard: £4.00</li>
      <li>Unwaged Pensioners: £3.50</li>
      <li>Unwaged: £3.00</li>
      <li>Juniors (under 18): £2.00</li>
      <li>Annual Option: £99.00</li>
    </ul>
    <p><em>Cashless only — card payment via reader.</em></p>

    <H3>Venue</H3>
    <p>
      <A
          href="https://maps.google.com/maps?z=16&q=roundhay%2Bparochial%2Bhall%2C%2Bfitzroy%2Bdrive%2C%2Broundhay%2C%2Bleeds%2C%2Bls8%2B4ab"
          target="_blank"
      >
        <img src={Parochial} alt="Parochial Hall" />
        Roundhay Parochial Hall<br />
        Fitzroy Drive, Roundhay, Leeds, LS8 4AB
      </A>
    </p>
    <H3>Contact</H3>
    <p>
      Email: <A href="mailto:roseforgrovechessclub@gmail.com"
             >roseforgrovechessclub@gmail.com</A
                                             > or use our contact form.
    </p>
  </Card>
</article>

<style lang="scss">
 article {
     display: flex;
     flex-direction: column;
     gap: 1rem;

     margin: 0 auto;
     flex: 1;
     display: flex;
     flex-direction: column;

     img {
         border-radius: 1rem;
         margin-bottom: 0.5rem;
         width: 400px;
     }

     p {
         margin-bottom: 1rem;
     }

     ul {
         margin-bottom: 1rem;

         li {
             margin-bottom: 0.3rem;
         }
     }
 }
</style>
