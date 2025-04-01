// Button.jsx - 버튼 컴포넌트
// ------------------------------------------------------------
function Button({ name, onClick }) {
    const [isHovered, setIsHovered] = React.useState(false);
    
    const buttonStyles = {
      btn: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#555",
        textDecoration: "none",
        fontSize: "0.6em",
        padding: "5px 10px",
        margin: "0 5px",
        borderRadius: "5px",
        transition: "background-color 0.3s",
        cursor: "pointer",
        border: "none",
        display: "inline-block"
      },
      btnHover: {
        backgroundColor: "#777"
      }
    };
    
    return (
      <button
        style={{
          ...buttonStyles.btn,
          ...(isHovered ? buttonStyles.btnHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {name}
      </button>
    );
  }
  