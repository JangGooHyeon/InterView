package kr.or.ddit.career_info.dao;

import java.util.List;

import kr.or.ddit.career_info.model.Career_infoVo;

public interface ICareer_infoDao {
	
	/**
	 * 
	 * Method : insert_career_info
	 * 작성자 : pjk
	 * 변경이력 :
	 * @param vo
	 * @return
	 * Method 설명 : 경력 정보 등록
	 */
	int insert_career_info(Career_infoVo vo);
	
	/**
	 * Method : select_careerInfo
	 * 작성자 : jin
	 * 변경이력 :
	 * @param vo
	 * @return
	 * Method 설명 : 사용자의 경력 사항 조회
	 */
	List<Career_infoVo> select_careerInfo(String user_id);
}
