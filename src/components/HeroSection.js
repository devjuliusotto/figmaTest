import React from "react";

function HeroSection() {
  return (
    <div
      style={{
        width: 1440,
        height: 846,
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 71,
        display: "inline-flex",
      }}
    >
      {/* Conteúdo principal */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ position: "relative", width: "fit-content" }}>
            <div
              style={{
                width: 103.98,
                height: 45,
                background: "rgba(255,255,255,0.10)",
                borderRadius: 38.24,
                border: "1.27px solid #171717",
                padding: "12.75px 25.49px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "#171717",
                  fontSize: 20,
                  fontFamily: "Lufga",
                  fontWeight: 500,
                }}
              >
                Hello!
              </div>
            </div>
          </div>
          <div
            style={{ width: 913, textAlign: "center", whiteSpace: "pre-wrap" }}
          >
            <span
              style={{
                color: "#171717",
                fontSize: 95.57,
                fontFamily: "Urbanist",
                fontWeight: 600,
              }}
            >
              I’m{" "}
            </span>
            <span
              style={{
                color: "#FD853A",
                fontSize: 95.57,
                fontFamily: "Urbanist",
                fontWeight: 600,
              }}
            >
              Julius
            </span>
            <span
              style={{
                color: "#171717",
                fontSize: 95.57,
                fontFamily: "Urbanist",
                fontWeight: 600,
              }}
            >
              , Product Designer
            </span>
          </div>
        </div>
      </div>

      {/* Ao lado direito, temos imagens e elementos */}
      {/* Ajuste conforme seu design. Vamos colocar uma imagem de placeholder */}
      <div style={{ position: "relative" }}>
        {/* Avaliação (10 Years Experience) */}
        <div
          style={{
            position: "absolute",
            left: 1200,
            top: 380,
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 21,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Estrelas do rating */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    background: "#FD853A",
                    margin: "0 5px",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 5,
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#171717",
                fontSize: 47,
                fontFamily: "Urbanist",
                fontWeight: 700,
              }}
            >
              10 Years
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#171717",
                fontSize: 20,
                fontFamily: "Lufga",
                fontWeight: 400,
              }}
            >
              Experience
            </div>
          </div>
        </div>

        {/* Imagem principal */}
        <div
          style={{
            width: 952.4,
            height: 636,
            backgroundImage: `url('../assets/images/moca.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Botões Portfolio / Hire me sobrepostos */}
        <div
          style={{
            position: "absolute",
            left: 537,
            top: 804,
            width: 367,
            height: 82,
            padding: 10,
            background: "rgba(255,255,255,0.10)",
            borderRadius: 50,
            border: "2px solid white",
            backdropFilter: "blur(15px)",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              height: 62,
              padding: "10px 20px",
              background: "#FD853A",
              borderRadius: 60,
              display: "flex",
              alignItems: "center",
              border: "0.5px solid #D0D5DD",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 25.69,
                fontFamily: "Lufga",
                fontWeight: 500,
              }}
            >
              Portfolio
            </div>
          </div>
          <div
            style={{
              flex: "1 1 0",
              height: 54,
              padding: "10px 20px",
              borderRadius: 60,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 25.69,
                fontFamily: "Lufga",
                fontWeight: 300,
              }}
            >
              Hire me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
