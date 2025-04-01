// Header.jsx - 헤더 컴포넌트
// ------------------------------------------------------------
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    
    const headerStyles = {
      header: {
        backgroundColor: "#333",
        width: "100%",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      },
      title: {
        color: "white",
        fontSize: "1.8em",
        fontWeight: "bold",
        margin: 0,
      },
      nav: {
        display: "flex",
        gap: "10px",
      },
      mobileMenuButton: {
        display: "none",
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        fontSize: "1.5em",
        cursor: "pointer",
      },
      mobileMenu: {
        display: "none",
        position: "absolute",
        top: "60px",
        right: "0",
        backgroundColor: "#333",
        width: "200px",
        padding: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 100,
      }
    };
    
    const handleMenuClick = (section) => {
      console.log(`이동: ${section}`);
      // 실제로는 여기에 페이지 이동 또는 스크롤 로직이 들어갑니다
      setIsMobileMenuOpen(false);
    };
  
    return (
      <header style={headerStyles.header}>
        <h1 style={headerStyles.title}>Introduce My-Self</h1>
        
        <div style={headerStyles.nav}>
          <Button name="소개" onClick={() => handleMenuClick('intro')} />
          <Button name="기술 스택" onClick={() => handleMenuClick('skills')} />
          <Button name="프로젝트" onClick={() => handleMenuClick('projects')} />
          <Button name="연락처" onClick={() => handleMenuClick('contact')} />
        </div>
      </header>
    );
  }
  
  