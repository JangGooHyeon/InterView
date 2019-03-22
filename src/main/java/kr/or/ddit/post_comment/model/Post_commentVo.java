package kr.or.ddit.post_comment.model;

public class Post_commentVo {
	private String comment_code;		// 댓글코드
	private String user_id;				// 작성자
	private String comment_contents;	// 내용
	private String ref_code;			// 참조코드
	private String division;			// 구분
	private String comment_date;		// 작성일
	
	public Post_commentVo() {
		// TODO Auto-generated constructor stub
	}

	public String getComment_code() {
		return comment_code;
	}

	public void setComment_code(String comment_code) {
		this.comment_code = comment_code;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getComment_contents() {
		return comment_contents;
	}

	public void setComment_contents(String comment_contents) {
		this.comment_contents = comment_contents;
	}

	public String getRef_code() {
		return ref_code;
	}

	public void setRef_code(String ref_code) {
		this.ref_code = ref_code;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getComment_date() {
		return comment_date;
	}

	public void setComment_date(String comment_date) {
		this.comment_date = comment_date;
	}

	@Override
	public String toString() {
		return "Post_commentVo [comment_code=" + comment_code + ", user_id=" + user_id + ", comment_contents="
				+ comment_contents + ", ref_code=" + ref_code + ", division=" + division + ", comment_date="
				+ comment_date + "]";
	}
	
}