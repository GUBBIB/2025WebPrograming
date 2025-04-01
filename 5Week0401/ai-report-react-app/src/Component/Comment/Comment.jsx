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
  
  