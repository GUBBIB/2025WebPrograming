import React from 'react';

// App.jsx - 메인 애플리케이션 컴포넌트
// ------------------------------------------------------------
function App() {
  return (
    <div className="app-container">
      <Header />
      <Detail />
      <CommentList />
      <Footer />
    </div>
  );
}

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

// Comment.jsx - 댓글 컴포넌트
// ------------------------------------------------------------
function Comment({ name, comment, imageSrc, date }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // 기본 이미지 사용
  const profileImage = imageSrc || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
  
  const commentStyles = {
    wrapper: {
      margin: "12px 0",
      padding: "15px",
      display: "flex",
      flexDirection: "row",
      border: "1px solid #ddd",
      borderRadius: "16px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      transition: "transform 0.2s",
    },
    wrapperHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    imageContainer: {
      marginRight: "15px",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      objectFit: "cover",
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexGrow: 1,
    },
    nameText: {
      color: "#333",
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    commentText: {
      color: "#555",
      fontSize: "16px",
      lineHeight: "1.4",
    },
    date: {
      color: "#888",
      fontSize: "12px",
      marginTop: "8px",
    }
  };
  
  return (
    <div 
      style={{
        ...commentStyles.wrapper,
        ...(isHovered ? commentStyles.wrapperHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={commentStyles.imageContainer}>
        <img src={profileImage} style={commentStyles.image} alt={`${name}의 프로필`} />
      </div>

      <div style={commentStyles.contentContainer}>
        <span style={commentStyles.nameText}>{name}</span>
        <span style={commentStyles.commentText}>{comment}</span>
        {date && <span style={commentStyles.date}>{date}</span>}
      </div>
    </div>
  );
}

// CommentList.jsx - 댓글 목록 컴포넌트
// ------------------------------------------------------------
function CommentList() {
  // 초기 댓글 데이터
  const initialComments = [
    {
      id: 1,
      name: "GUBBIB",
      comment: "안녕하세요~",
      date: "2025-03-30"
    },
    {
      id: 2,
      name: "굽빕",
      comment: "와 대단하시네요~",
      date: "2025-03-29"
    },
    {
      id: 3,
      name: "장문용",
      comment: "저도 본받고 싶어요!",
      date: "2025-03-28"
    }
  ];

  const [comments, setComments] = React.useState(initialComments);
  const [newComment, setNewComment] = React.useState({ name: "", comment: "" });
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.comment) {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      
      setComments([
        ...comments, 
        { 
          id: comments.length + 1, 
          name: newComment.name, 
          comment: newComment.comment,
          date: formattedDate
        }
      ]);
      setNewComment({ name: "", comment: "" });
    }
  };

  const commentListStyles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
    },
    title: {
      borderBottom: "2px solid #eee",
      paddingBottom: "10px",
      marginBottom: "20px",
      fontSize: "1.5rem",
      color: "#333",
    },
    form: {
      marginBottom: "30px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      minHeight: "80px",
      fontSize: "16px",
      resize: "vertical",
    },
    button: {
      backgroundColor: "#555",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#777",
    }
  };

  return (
    <div style={commentListStyles.container}>
      <h2 style={commentListStyles.title}>댓글</h2>
      
      <form onSubmit={handleSubmit} style={commentListStyles.form}>
        <div style={commentListStyles.inputGroup}>
          <label style={commentListStyles.label} htmlFor="name">이름</label>
          <input
            style={commentListStyles.input}
            type="text"
            id="name"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요"
            required
          />
        </div>
        
        <div style={commentListStyles.inputGroup}>
          <label style={commentListStyles.label} htmlFor="comment">댓글</label>
          <textarea
            style={commentListStyles.textarea}
            id="comment"
            name="comment"
            value={newComment.comment}
            onChange={handleInputChange}
            placeholder="댓글을 입력하세요"
            required
          />
        </div>
        
        <button 
          style={{
            ...commentListStyles.button,
            ...(isButtonHovered ? commentListStyles.buttonHover : {})
          }}
          type="submit"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          댓글 작성
        </button>
      </form>
      
      <div>
        {comments.map((comment) => (
          <Comment 
            key={comment.id}
            name={comment.name} 
            comment={comment.comment}
            date={comment.date}
          />
        ))}
      </div>
    </div>
  );
}

// Detail.jsx - 개인 프로필 상세 정보 컴포넌트
// ------------------------------------------------------------
function Detail() {
  // 기술 스택 목록
  const skills = ["JavaScript", "React", "HTML/CSS", "Node.js", "Java"];

  const detailStyles = {
    container: {
      margin: "30px auto",
      maxWidth: "800px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    },
    profileImage: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 20px",
      border: "5px solid #fff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    name: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#333",
    },
    title: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      marginBottom: "20px",
      color: "#444",
    },
    infoSection: {
      margin: "30px 0",
      textAlign: "left",
    },
    infoTitle: {
      fontSize: "1.3rem",
      borderBottom: "2px solid #eee",
      paddingBottom: "10px",
      marginBottom: "15px",
      color: "#333",
    },
    infoList: {
      listStyle: "none",
      padding: 0,
    },
    infoItem: {
      margin: "10px 0",
      padding: "5px 0",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      margin: "20px 0",
    },
    skillBadge: {
      backgroundColor: "#eee",
      padding: "5px 15px",
      borderRadius: "20px",
      fontSize: "0.9rem",
      color: "#555",
    }
  };

  return (
    <div style={detailStyles.container}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
        alt="프로필 이미지" 
        style={detailStyles.profileImage} 
      />
      <h1 style={detailStyles.name}>장문용</h1>
      <p style={detailStyles.title}>경성대학교 소프트웨어학과 21학번</p>
      <p style={detailStyles.description}>
        안녕하세요, 저는 경성대학교 소프트웨어학과에 재학 중인 학생입니다. 
        웹 개발에 관심이 많으며, 특히 React와 같은 프론트엔드 기술에 열정을 가지고 있습니다.
        항상 새로운 기술을 배우고 성장하기 위해 노력하고 있습니다.
      </p>

      <div style={detailStyles.skillsContainer}>
        {skills.map((skill, index) => (
          <span key={index} style={detailStyles.skillBadge}>{skill}</span>
        ))}
      </div>

      <div style={detailStyles.infoSection}>
        <h2 style={detailStyles.infoTitle}>학력</h2>
        <ul style={detailStyles.infoList}>
          <li style={detailStyles.infoItem}>경성대학교 소프트웨어학과 (2021 ~ 현재)</li>
          <li style={detailStyles.infoItem}>OO고등학교 (2018 ~ 2021)</li>
        </ul>
      </div>

      <div style={detailStyles.infoSection}>
        <h2 style={detailStyles.infoTitle}>프로젝트 경험</h2>
        <ul style={detailStyles.infoList}>
          <li style={detailStyles.infoItem}>개인 포트폴리오 웹사이트 개발 (React)</li>
          <li style={detailStyles.infoItem}>학과 동아리 웹 애플리케이션 제작</li>
          <li style={detailStyles.infoItem}>대학 축제 모바일 앱 개발 참여</li>
        </ul>
      </div>
    </div>
  );
}

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

// Footer.jsx - 푸터 컴포넌트
// ------------------------------------------------------------
function Footer() {
  const footerStyles = {
    footer: {
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "50px",
      width: "100%",
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    links: {
      display: "flex",
      gap: "20px",
      marginBottom: "15px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "0.9rem",
    },
    copyright: {
      fontSize: "0.8rem",
      opacity: 0.8,
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.content}>
        <div style={footerStyles.links}>
          <a href="#" style={footerStyles.link}>GitHub</a>
          <a href="#" style={footerStyles.link}>LinkedIn</a>
          <a href="#" style={footerStyles.link}>이메일</a>
        </div>
        <p style={footerStyles.copyright}>© 2025 My Portfolio Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;