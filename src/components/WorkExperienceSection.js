import React from "react";

function WorkExperienceSection() {
  return (
    <div
      style={{
        width: "100%",
        height: 827,
        paddingLeft: 71,
        paddingRight: 71,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          paddingTop: 85,
          paddingBottom: 85,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontFamily: "Lufga",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          My <span style={{ color: "#FD853A" }}>Work Experince</span>
        </div>
      </div>
      <div
        style={{
          width: 1298,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Coluna esquerda (Empresas) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 102,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              Pomerode, Brazil
            </div>
            <div
              style={{
                color: "#98A2B3",
                fontSize: 24,
                fontFamily: "Lufga",
                fontWeight: 400,
              }}
            >
              Sep 2016- July 2020
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              Munich, Germany
            </div>
            <div
              style={{
                color: "#98A2B3",
                fontSize: 24,
                fontFamily: "Lufga",
                fontWeight: 400,
              }}
            >
              Sep 2020- July 2023
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              Munich, Germany
            </div>
            <div
              style={{
                color: "#98A2B3",
                fontSize: 24,
                fontFamily: "Lufga",
                fontWeight: 400,
              }}
            >
              Sep 2023
            </div>
          </div>
        </div>

        {/* Linha pontilhada com círculos */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          {/* Linha vertical dotted rotacionada */}
          <div
            style={{
              width: 48,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Círculos com cores alternadas */}
            <div
              style={{
                width: 48,
                height: 48,
                background: "white",
                borderRadius: 48,
                border: "2px dotted #1D2939",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#FD853A",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                background: "white",
                borderRadius: 48,
                border: "2px dotted #1D2939",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#1D2939",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                background: "white",
                borderRadius: 48,
                border: "2px dotted #1D2939",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#FD853A",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Coluna Direita (Cargos) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              Experince Designer
            </div>
            <div
              style={{
                width: 444,
                color: "#98A2B3",
                fontSize: 20,
                fontFamily: "Lufga",
                fontWeight: 500,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              UI/UX Designer
            </div>
            <div
              style={{
                width: 444,
                color: "#98A2B3",
                fontSize: 20,
                fontFamily: "Lufga",
                fontWeight: 500,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                color: "#344054",
                fontSize: 40,
                fontFamily: "Lufga",
                fontWeight: 600,
              }}
            >
              Lead UX Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceSection;
