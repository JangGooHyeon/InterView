<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:forEach items="${followConnections}" var="conn">
	<div style="width: 225px;">
		<div class="col-md-3 corporation">
			<div
				style="width: 59px;height: 59px;background-image:url(/profile?mem_id=${conn.user_id});background-repeat: no-repeat;background-size: cover;background-position: center;margin-left: 5px;margin-top: 15px; margin-bottom: 12px;"></div>
			<div>
				<label style="font-size: 17px;"><strong>${conn.user_name}
				</strong></label><br/> <label>${conn.introduce}</label>
			</div>
		</div>
		<div>
			<button class="btn btn-default followingBtn">
				<i class="fas fa-check"></i> 팔로우 중
			</button>
		</div>
	</div>
</c:forEach>