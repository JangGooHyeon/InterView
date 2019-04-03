package kr.or.ddit.education_info.dao;

import java.util.List;

import kr.or.ddit.education_info.model.Education_infoVo;

public interface IEducation_infoDao {
	
	/**
	 * 
	 * Method : insert_education_info
	 * 작성자 : pjk
	 * 변경이력 :
	 * @param vo
	 * @return
	 * Method 설명 : 회원 학력 등록
	 */
	int insert_education_info(Education_infoVo vo);
	
	
	/**
	 * Method : select_educationInfo
	 * 작성자 : jin
	 * 변경이력 :
	 * @param user_id
	 * @return
	 * Method 설명 : 사용자 학력 조회
	 */
	List<Education_infoVo> select_educationInfo(String user_id);
	
}
