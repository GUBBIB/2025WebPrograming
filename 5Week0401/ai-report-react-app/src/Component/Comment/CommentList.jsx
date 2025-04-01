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
  
  