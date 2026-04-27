"use client";

export default function Home() {
  return (
    <>
      <nav
        style={{
          padding: "18px 50px",
          backgroundColor: "#000",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <b style={{ fontSize: "22px" }}>AVASH MULTIVERSE</b>

        <div>
          <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ marginRight: "25px", cursor: "pointer" }}>
            Home
          </span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} style={{ marginRight: "25px", cursor: "pointer" }}>
            About
          </span>
          <span onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{ marginRight: "25px", cursor: "pointer" }}>
            Projects
          </span>
          <span onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>
            Contact
          </span>
        </div>
      </nav>

      <section
        style={{
          padding: "110px 20px",
          textAlign: "center",
          backgroundColor: "#f4f4f4",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          AVASH MULTIVERSE PVT. LTD. 🚀
        </h1>

        <p style={{ marginTop: "22px", fontSize: "22px" }}>
          Building Nepal’s Future Through Industry, Innovation, and Employment.
        </p>

        <p style={{ marginTop: "18px", fontSize: "18px", maxWidth: "900px", marginInline: "auto", lineHeight: "1.7" }}>
          Avash Multiverse Pvt. Ltd. aims to invest in multiple productive sectors,
          create employment in Nepal, increase the income level of Nepali people,
          improve living standards, and support Nepal’s economic growth.
        </p>

        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            marginTop: "35px",
            padding: "14px 32px",
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      <section id="about" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px" }}>About Avash Multiverse Pvt. Ltd.</h2>

        <p style={{ marginTop: "25px", fontSize: "18px", maxWidth: "950px", marginInline: "auto", lineHeight: "1.8" }}>
          Avash Multiverse Pvt. Ltd. is a multi-sector investment company dedicated
          to transforming Nepal’s economy by creating employment opportunities and
          promoting sustainable industries.
        </p>

        <p style={{ marginTop: "18px", fontSize: "18px", maxWidth: "950px", marginInline: "auto", lineHeight: "1.8" }}>
          Our mission is to reduce dependency on imports, strengthen local
          production, and empower Nepali people through agriculture, manufacturing,
          innovation, and industrial development.
        </p>
      </section>

      <section
        id="projects"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f8fafc",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Our Projects</h2>

        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          {[
            "Green Gorakha Agro Industry",
            "Gorkhas Food Industry",
            "Gorkhas Shoes & Slippers Industry",
            "Himalayan Tea & Coffee Industry",
            "Garment Industry",
            "Furniture Industry",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px" }}>Our Vision</h2>

        <p style={{ marginTop: "22px", fontSize: "18px", maxWidth: "850px", marginInline: "auto", lineHeight: "1.8" }}>
          To make Nepal self-sustainable by building strong industries, creating
          job opportunities within the country, and promoting Nepali products in
          national and international markets.
        </p>
      </section>

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f8fafc",
        }}
      >
        <h2 style={{ fontSize: "36px" }}>Our Mission</h2>

        <div style={{ marginTop: "25px", fontSize: "18px", lineHeight: "2" }}>
          <p>✅ Promote local production</p>
          <p>✅ Support farmers and industries</p>
          <p>✅ Create employment in Nepal</p>
          <p>✅ Reduce dependency on imports</p>
          <p>✅ Expand Nepali products globally</p>
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px" }}>Contact Us</h2>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          📧 Email: avashmultiverse@gmail.com
        </p>

        <p style={{ fontSize: "18px" }}>
          📍 Location: Sandhikharka, Arghakhanchi, Nepal
        </p>

        <p style={{ fontSize: "18px" }}>
          🌐 Website: www.avashmultiverse.com
        </p>
      </section>

      <footer
        style={{
          padding: "25px",
          backgroundColor: "#000",
          color: "white",
          textAlign: "center",
        }}
      >
        © 2026 Avash Multiverse Pvt. Ltd. All Rights Reserved.
      </footer>
    </>
  );
}