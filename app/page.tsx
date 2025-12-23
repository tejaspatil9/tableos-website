export default function Home() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto" }}>
      
      {/* HERO */}
      <section>
        <h1 style={{ fontSize: "42px" }}>TableOS</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          The operating system for restaurants
        </p>

        <p style={{ marginTop: "20px" }}>
          Launch digital menus today. Powerful billing software coming soon.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a href="#qr" style={{ marginRight: "15px" }}>View QR Menu</a>
          <a href="#pos">POS Coming Soon</a>
        </div>
      </section>

      <hr style={{ margin: "50px 0" }} />

      {/* QR MENU */}
      <section id="qr">
        <h2>QR Menu (Live)</h2>

        <p>
          TableOS QR Menu helps restaurants replace printed menus with a clean,
          fast, mobile-friendly digital menu.
        </p>

        <ul>
          <li>Customers scan & view menu instantly</li>
          <li>Update prices and items anytime</li>
          <li>No app download required</li>
          <li>Works on all smartphones</li>
        </ul>

        <p>
          Suitable for cafés, restaurants, food courts, and cloud kitchens.
        </p>

        <button style={{ marginTop: "10px" }}>
          Get QR Menu Pricing on WhatsApp
        </button>
      </section>

      <hr style={{ margin: "50px 0" }} />

      {/* POS */}
      <section id="pos">
        <h2>POS Billing (Coming Soon)</h2>

        <p>
          TableOS POS is currently under development and will launch soon.
        </p>

        <p>
          It is being built for fast billing, simple item management,
          GST-ready invoices, and smooth integration with QR menus.
        </p>

        <p>
          Early access will be available for selected restaurants.
        </p>

        <button style={{ marginTop: "10px" }}>
          Join POS Early Access
        </button>
      </section>

      <hr style={{ margin: "50px 0" }} />

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} TableOS
        </p>
        <p>
          The operating system for restaurants
        </p>
      </footer>

    </main>
  );
}
