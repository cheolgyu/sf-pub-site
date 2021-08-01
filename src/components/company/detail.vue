<template>
  <details open >
    <summary>회사-기본정보</summary>
    <table>
      <tr>
        <th>단축 코드</th>
        <th>표준 코드</th>
        <th>한글 종목명</th>
        <th>한글 종목약명</th>
        <th>영문 종목명</th>
        <th>상장일</th>
        <th>시장구분</th>
        <th>증권구분</th>
        <th>소속부</th>
        <th>주식종류</th>
        <th>액면가</th>
        <th>상장주식수</th>
      </tr>
      <tr>
        <td>{{ data.code }}</td>
        <td>{{ data.full_code }}</td>
        <td>{{ data.full_name_kr }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.full_name_eng }}</td>
        <td>{{ data.listing_date }}</td>
        <td>{{ data.market }}</td>
        <td>{{ data.securities_classification }}</td>
        <td>{{ data.department }}</td>
        <td>{{ data.stock_type }}</td>
        <td>{{ data.face_value }}</td>
        <td>{{ data.listed_stocks }}</td>
      </tr>
    </table>
  </details>
 
</template>
<script>
/*eslint no-unused-vars: "error"*/

export default {
  props: {
    data: Object,
  },
};
</script>
