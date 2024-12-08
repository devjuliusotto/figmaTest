import React from "react";

function Introduction() {
  return (
    <div
      style={{
        width: 1440,
        height: 846,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#171717",
            fontSize: 96,
            fontFamily: "Urbanist",
            fontWeight: 600,
          }}
        >
          I’m <span style={{ color: "#FD8439" }}>Julius</span>, Product Designer
        </div>
        <div style={{ marginTop: 20 }}>
          <button
            style={{
              padding: "10px 40px",
              borderRadius: 30,
              background: "#FD8439",
              color: "white",
              fontSize: 20,
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
            }}
          >
            Conheça Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
