"use client";

export default function Home() {
  return (
    <>
      <nav
        style={{
          padding: "18px 45px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <b style={{ fontSize: "20px" }}>AVASH MULTIVERSE</b>

        <div>
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ marginRight: "25px", cursor: "pointer" }}
          >
            Home
          </span>

          <span
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ marginRight: "25px", cursor: "pointer" }}
          >
            About
          </span>

          <span
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ marginRight: "25px", cursor: "pointer" }}
          >
            Projects
          </span>

          <span
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
          >
            Contact
          </span>
        </div>
      </nav>

      <section
        style={{
          padding: "90px 40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          AVASH MULTIVERSE PVT. LTD. 🚀
        </h1>

        <p style={{ marginTop: "20px", fontSize: "21px", lineHeight: "1.7" }}>
          Building industries, creating employment, supporting Nepali people,
          and contributing to Nepal’s economic growth.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            marginTop: "35px",
            padding: "14px 30px",
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      <section
        id="about"
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
          About Avash Multiverse Pvt. Ltd.
        </h2>

        <p style={{ marginTop: "25px", fontSize: "18px", lineHeight: "1.8" }}>
          Avash Multiverse Pvt. Ltd. is a multi-sector investment company
          focused on developing Nepal’s economy by creating employment
          opportunities and increasing the income level of Nepali people. The
          company aims to improve the standard of living and contribute to
          national growth.
        </p>

        <p style={{ marginTop: "18px", fontSize: "18px", lineHeight: "1.8" }}>
          The company invests in various productive sectors such as agro
          industry, food industry, garment industry, furniture industry, and
          other emerging industries to build a sustainable and self-reliant
          economy.
        </p>

        <p style={{ marginTop: "30px", fontSize: "18px", lineHeight: "1.9" }}>
          आभाष मल्टिभर्स प्रा. लि. नेपालमा विभिन्न क्षेत्रमा लगानी गरी
          रोजगारी सिर्जना गर्ने, नेपालीहरूको आय स्तर बढाउने र जीवनस्तर सुधार
          गर्ने उद्देश्यले स्थापना गरिएको बहु-क्षेत्रीय कम्पनी हो। यसले नेपालको
          अर्थतन्त्रलाई मजबुत बनाउन महत्वपूर्ण भूमिका खेल्ने लक्ष्य राखेको छ।
        </p>

        <p style={{ marginTop: "18px", fontSize: "18px", lineHeight: "1.9" }}>
          कम्पनीले कृषि उद्योग, खाद्य उद्योग, गार्मेन्ट उद्योग, फर्निचर उद्योग
          लगायत विभिन्न उत्पादनमूलक क्षेत्रमा लगानी गर्दै आत्मनिर्भर र दिगो
          अर्थतन्त्र निर्माण गर्ने लक्ष्य राखेको छ।
        </p>
      </section>

      <section
        id="projects"
        style={{
          padding: "70px 40px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Our Projects
        </h2>

        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "🌱 Green Gorkha Agro Industry",
            "🍜 Gorkhas Food Industry",
            "👕 Garment Industry",
            "🪑 Furniture Industry",
            "☕ Himalayan Tea & Coffee Industry",
            "👟 Shoes & Slippers Industry",
          ].map((project) => (
            <div
              key={project}
              style={{
                padding: "25px",
                backgroundColor: "white",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {project}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Our Goals
        </h2>

        <ul
          style={{
            marginTop: "30px",
            fontSize: "18px",
            lineHeight: "2",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>✅ Create employment opportunities in Nepal</li>
          <li>✅ Increase income level of Nepali people</li>
          <li>✅ Improve living standards</li>
          <li>✅ Support farmers and local producers</li>
          <li>✅ Reduce import dependency</li>
          <li>✅ Promote Nepali products and future export</li>
        </ul>
      </section>

      <section
        id="contact"
        style={{
          padding: "70px 40px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Contact Us
        </h2>

        <p style={{ marginTop: "25px", fontSize: "18px" }}>
          Email: avashmultiverse@gmail.com
        </p>

        <p style={{ fontSize: "18px" }}>Phone: +977-98XXXXXXXX</p>

        <p style={{ fontSize: "18px" }}>
          Address: Sandhikharka-2, Bhaktitol, Arghakhanchi, Nepal
        </p>
      </section>

      <footer
        style={{
          padding: "25px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        © 2026 Avash Multiverse Pvt. Ltd. All rights reserved.
      </footer>
    </>
  );
}