
export default function LargeComponent() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#e3f2fd",
        color: "#000000",
        border: "2px solid #2196f3",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#1565c0" }}>
        Componente cargado dinámicamente
      </h2>

      <p style={{ color: "#333333" }}>
        Este componente utiliza Lazy Loading para
        mejorar el rendimiento de la aplicación.
      </p>
    </div>
  );
}
